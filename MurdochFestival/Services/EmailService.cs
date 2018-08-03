using System;
using System.IO;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using MimeKit;
using Microsoft.Extensions.Options;
using MurdochFestival.Logging;
using MurdochFestival.Models.EF;
using MurdochFestival.Models.Email;
using MurdochFestival.Settings;
using RazorLight;

namespace MurdochFestival.Services
{
    public class EmailService : IEmailService
    {
      private MailConfig Config { get; }

      private IHttpContextAccessor HttpContextAccessor { get; }

      private readonly ILogger _logger;
        
      public EmailService(IOptions<MailConfig> optionsAccessor, IHttpContextAccessor httpContextAccessor, ILogger<EmailService> logService)
      {
        Config = optionsAccessor.Value;
        HttpContextAccessor = httpContextAccessor;
        _logger = logService;
      }

      private static bool EmailIsValid(string emailaddress)
      {
        try
        {
          var mailboxAddress = new MailboxAddress(emailaddress);
          return mailboxAddress != null;
        }
        catch (FormatException)
        {
          return false;
        }
      }

      private void SendEmail(MimeMessage message)
      {
        if (Config.DeliveryMethod == MailConfig.MethodType.Network)
        {
          using (var client = new SmtpClient())
          {
            if (Config.Network.Port == 587)
            {
              client.Connect(Config.Network.Host, Config.Network.Port, SecureSocketOptions.StartTlsWhenAvailable);
            }
            else
            {
              client.Connect(Config.Network.Host, Config.Network.Port, Config.Network.EnableSsl);
            }

            // Note: since we don't have an OAuth2 token, disable
            // the XOAUTH2 authentication mechanism.
            client.AuthenticationMechanisms.Remove("XOAUTH2");

            if (!string.IsNullOrEmpty(Config.Network.UserName) && !string.IsNullOrEmpty(Config.Network.Password))
            {
              client.Authenticate(Config.Network.UserName, Config.Network.Password);
            }

            client.Send(message);
            client.Disconnect(true);
          }
        }
        if (Config.DeliveryMethod == MailConfig.MethodType.Directory)
        {
          //write to directory
          using (var data = File.CreateText(Path.Combine(Config.Directory.Location, Guid.NewGuid() + ".eml")))
          {
            message.WriteTo(data.BaseStream);
          }
        }
      }

      private static async Task<string> ParseViewToString(string viewName, dynamic model)
      {
        var engine = new RazorLightEngineBuilder()
          .UseFilesystemProject(Directory.GetCurrentDirectory() + @"\Views\Email")
          .UseMemoryCachingProvider()
          .Build();

        return await engine.CompileRenderAsync(viewName, model);
      }

      public bool SendContactUsSystemEmail(ContactUsEntry entry)
      {
        var message = new MimeMessage();
        var toEmail = Config.SystemEmailAddress;
        try
        {                
          if (EmailIsValid(toEmail))
          {
            message.To.Add(new MailboxAddress(toEmail));
          }

        }
        catch (Exception ex)
        {
          _logger.LogError(LoggingEvents.SendSystemEmail, ex, $"Invalid email address for {toEmail}");
          return false;
        }

        message.Subject = "Murdoch Festival - Contact Us Submission";
        var model = new ContactUsSystemEmail(HttpContextAccessor, entry);

        var emailBodyTask = ParseViewToString("ContactUsSystemEmail.cshtml", model);
        emailBodyTask.Wait();
        var emailBody = emailBodyTask.Result;

        var bodyBuilder = new BodyBuilder
        {
          HtmlBody = emailBody,
          TextBody = emailBody
        };

        message.Body = bodyBuilder.ToMessageBody();
        message.From.Add(new MailboxAddress("Murdoch University", Config.DefaultFrom));

        try
        {
          SendEmail(message);

          return true;
        }
        catch (Exception ex)
        {
          _logger.LogError(LoggingEvents.SendSystemEmail, ex, $"Error sending email to {toEmail}");
          return false;
        }

      }
    }
}

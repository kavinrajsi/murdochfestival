using Microsoft.AspNetCore.Http;
using MurdochFestival.Models.EF;

namespace MurdochFestival.Models.Email
{
    public class ContactUsSystemEmail
    {
      private IHttpContextAccessor HttpContextAccessor { get; }

      public ContactUsSystemEmail(IHttpContextAccessor httpContextAccessor, ContactUsEntry entry)
      {           
        HttpContextAccessor = httpContextAccessor;
        ContactUsEntry = entry;
      }

      public ContactUsEntry ContactUsEntry { get; }

      public string BaseUrl
      {
        get
        {
          var appPath = string.Empty;

          //Getting the current context of HTTP request
          var context = HttpContextAccessor.HttpContext;

          //Checking the current context content
          if (context != null)
          {
            //Formatting the fully qualified website url/name
            appPath = $"{context.Request.Scheme}://{context.Request.Host}";                                           
          }

          if (!appPath.EndsWith("/"))
            appPath += "/";

          return appPath;
        }          
      }
    }
}

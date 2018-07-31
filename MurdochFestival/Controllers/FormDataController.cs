using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MurdochFestival.Data;
using MurdochFestival.Logging;
using MurdochFestival.Models.EF;
using MurdochFestival.Models.Response;
using MurdochFestival.Models.Services;
using MurdochFestival.Services;

namespace MurdochFestival.Controllers
{
    [Route("api/[controller]")]
    public class FormDataController : Controller
    {
        private FormContext Context { get; }
        private ILogger Logger { get; }
        private ICrmService CrmService { get; }
    
        public FormDataController(FormContext context, ILogger<HomeController> logService, ICrmService crmService)
        {
          Context = context;
          Logger = logService;
          CrmService = crmService;
        }

        ///POST /api/FormData/ContactUsSubmit
        [HttpPost("[action]")]
        public IActionResult ContactUsSubmit([FromBody]ContactUsEntry entry)
        {
            if (entry == null)
            {
              Logger.LogError(LoggingEvents.ContactUsEntryPost, $"Post entry is null from {HttpContext.Connection.RemoteIpAddress}");
              return BadRequest();
            }

            try
            {
              Context.ContactUsEntries.Add(entry);
              Context.SaveChanges();
        
              var contact = new CrmContact
              {
                FirstName = entry.ContactName.Split(' ').First(),
                LastName = entry.ContactName.Split(' ').Last(),
                EmailAddress = entry.Email
              };
              CrmService.CreateContact(contact);
            }
            catch (Exception ex)
            {                           
              Logger.LogError(LoggingEvents.ContactUsEntryPost, $"Post entry database save failed: {ex.StackTrace}");
              return StatusCode(500, new SubmitResponse("An error has occurred, please try again later."));
            }
            return Ok(new SubmitResponse("Thanks for contacting us, we will be in touch shortly."));
        }

        ///POST /api/FormData/SubscribeSubmit
        [HttpPost("[action]")]
        public IActionResult SubscribeSubmit([FromBody]SubscribeEntry entry)
        {
            if (entry == null)
            {
              Logger.LogError(LoggingEvents.SubscribeEntryPost, $"Post entry is null from {HttpContext.Connection.RemoteIpAddress}");
              return BadRequest();
            }

            try
            {
              Context.SubscribeEntries.Add(entry);
              Context.SaveChanges();

              var contact = new CrmContact
              {
                FirstName = entry.ContactName.Split(' ').First(),
                LastName = entry.ContactName.Split(' ').Last(),
                EmailAddress = entry.Email,
                SoundOnFestivalSubscribe = 1
              };
              CrmService.CreateContact(contact);
            }
            catch (Exception ex)
            {
              Logger.LogError(LoggingEvents.SubscribeEntryPost, $"Post entry database save failed: {ex.StackTrace}");
              return StatusCode(500, new SubmitResponse("An error has occurred, please try again later."));
            }

          return Ok(new SubmitResponse("Thanks for subscribing!"));
        }

        ///POST /api/FormData/TicketSubmit
        [HttpPost("[action]")]
        public IActionResult TicketSubmit([FromBody]TicketEntry entry)
        {
            if (entry == null)
            {
              Logger.LogError(LoggingEvents.TicketEntryPost, $"Post entry is null from {HttpContext.Connection.RemoteIpAddress}");
              return BadRequest();
            }

            try
            {
              Context.TicketEntries.Add(entry);
              Context.SaveChanges();

              var contact = new CrmContact
              {
                FirstName = entry.ContactName.Split(' ').First(),
                LastName = entry.ContactName.Split(' ').Last(),
                EmailAddress = entry.Email,
                SoundOnFestivalTicket = 1
              };
              CrmService.CreateContact(contact);
            }
            catch (Exception ex)
            {
              Logger.LogError(LoggingEvents.TicketEntryPost, $"Post entry database save failed: {ex.StackTrace}");
              return StatusCode(500, new SubmitResponse("An error has occurred, please try again later."));
            }

          return Ok(new SubmitResponse("Thanks for requesting a ticket, we will be in touch shortly."));
        }
    }
}

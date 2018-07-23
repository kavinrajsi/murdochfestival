using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MurdochFestival.Data;
using MurdochFestival.Logging;
using MurdochFestival.Models.EF;
using MurdochFestival.Models.Response;

namespace MurdochFestival.Controllers
{
    [Route("api/[controller]")]
    public class FormDataController : Controller
    {
        private FormContext Context { get; }
        private ILogger Logger { get; }

        public FormDataController(FormContext context, ILogger<HomeController> logService)
        {
          Context = context;
          Logger = logService;
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

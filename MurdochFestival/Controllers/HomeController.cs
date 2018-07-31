using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MurdochFestival.Data;

namespace MurdochFestival.Controllers
{
    public class HomeController : Controller
    {
        private FormContext Context { get; }
        private ILogger Logger { get; }

        public HomeController(FormContext context, ILogger<HomeController> logService)
        {
          Context = context;
          Logger = logService;
        }

        public IActionResult Index()
        {            
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}

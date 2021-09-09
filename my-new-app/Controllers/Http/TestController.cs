using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace my_new_app.Controllers.Http
{
    [ApiController]
   // [Produces("application/json")]
    [Route("[controller]")]
    public class TestController:ControllerBase
    {
        ILogger<TestController> _logger;
        public TestController(ILogger<TestController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public string Test()
        {
            Console.WriteLine("get test");
            return "this is test";
        }
    }
}
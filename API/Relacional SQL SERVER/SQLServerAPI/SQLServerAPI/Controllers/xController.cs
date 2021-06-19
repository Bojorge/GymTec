using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SQLServerAPI.ConnectionDB;
using SQLServerAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SQLServerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class xController : ControllerBase
    {

        private readonly AdminStoreContext context;
        public xController(AdminStoreContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public string Get()
        {
            return "Admin API";
        }
    }
}

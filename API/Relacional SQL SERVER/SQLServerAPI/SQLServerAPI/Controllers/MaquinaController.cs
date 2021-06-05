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
    public class MaquinaController : ControllerBase
    {
        private readonly AdminStoreContext context;
        public MaquinaController(AdminStoreContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Maquina> Get()
        {
            return context.Maquina.ToList();
        }

        [HttpGet ("{id}")]
        public Maquina Get(string id)
        {
            var maquina = context.Maquina.FirstOrDefault(m => m.serie == id);
            return maquina;
        }
    }
}

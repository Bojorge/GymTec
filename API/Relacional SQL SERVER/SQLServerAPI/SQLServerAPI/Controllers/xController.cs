using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

        [HttpGet]
        public string Get()
        {
            return "es correcto mi estimado";

        }

        [HttpGet("{h}")]
        public string Get(int h)
        {
            return h switch
            {
                1 => "Esveme",
                2 => "ak7",
                _ => throw new NotSupportedException("el numero no es valido")
            };

        }

        public string Post(humano saico)
        {
            return saico.nombre + " >>> lo volviste a lograr lml";
        }
    }


    public class humano
    {
        public string cerebros { get; set; }
        public string nombre { get; set; }
    }
}

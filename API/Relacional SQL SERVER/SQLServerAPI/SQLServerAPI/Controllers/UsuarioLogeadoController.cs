using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SQLServerAPI.ConnectionDB;
using SQLServerAPI.Models;

namespace SQLServerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioLogeadoController : ControllerBase
    {
        private readonly AdminStoreContext context;
        public UsuarioLogeadoController(AdminStoreContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public UsuarioLogeado Get()
        {
            var usuariologeado = context.UsuarioLogeado.First();
            return usuariologeado;
        }

       

        [HttpDelete]
        public ActionResult Delete()
        {
            try
            {
                long usuarioslogeados = context.UsuarioLogeado.ToList().LongCount();
                int cantidadlogeados = unchecked((int)usuarioslogeados);
                while (cantidadlogeados >= 1)
                {
                    var usuario = context.UsuarioLogeado.First();
                    if (usuario != null)
                    {
                        context.UsuarioLogeado.Remove(usuario);
                        context.SaveChanges();
                    }
                    cantidadlogeados -= 1;
                }

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
            
        }
    }
}

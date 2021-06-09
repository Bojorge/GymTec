using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDBAPI.Models;
using MongoDBAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDBAPI.Controllers;

namespace MongoDBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ClientService clientservice;
 
        public LoginController(ClientService clientservice)
        {
            this.clientservice = clientservice;
        }


        [HttpPost]
        public Boolean validate(Validar validar)
        {
            List<Cliente> clientes = clientservice.Get();
            Boolean acceso = false;

            //recorre la lista de clientes y verifica si el correo y la contraseña con el que se hace login estan asignados a 1 cliente
            foreach(Cliente cliente in clientes)
            {
                if(cliente.correo == validar.correo && cliente.contrasena == validar.contrasena)
                {
                    acceso = true;
                }
            }
            
            return acceso; 
        }
    }
}

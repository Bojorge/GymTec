using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDBAPI.Models;
using MongoDBAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MongoDBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController : ControllerBase
    {
        private readonly ClientService clientservice;
        public Cliente actualUser;

        public ActivitiesController(ClientService clientservice)
        {
            this.clientservice = clientservice;
        }

        [HttpGet]
        public Cliente Get() //necesito que este metodo me devuelva el cliente que está logeado
        {
            List<Cliente> clientes = clientservice.Get();

            //recorre la lista de clientes y verifica si el correo y la contraseña con el que se hace login estan asignados a 1 cliente
            foreach (Cliente cliente in clientes)
            {
                if (cliente.correo == "correo" && cliente.contrasena == "contrasena")
                {
                    this.actualUser = cliente;

                }
            }
            return getActualUser();
        }

        public void setActualUser(Cliente cliente)
        {
            this.actualUser = cliente;
        }

        public Cliente getActualUser()
        {
            return this.actualUser;
        }

    }
}

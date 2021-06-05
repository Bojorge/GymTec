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
    public class ClientController : ControllerBase
    {
        private readonly ClientService clientservice;

        public ClientController(ClientService clientservice)
        {
            this.clientservice = clientservice;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(clientservice.Get());
        }

        [HttpGet("{id:length(24)}", Name = "GetCliente")]
        public IActionResult GetById(string id)
        {
            var cliente = clientservice.GetById(id);

            if (cliente == null)
            {
                return NotFound();
            }

            return Ok(cliente);
        }

        [HttpPost]
        public IActionResult Create(Cliente cliente)
        {
            clientservice.Create(cliente);

            return CreatedAtRoute("GetCliente", new
            {
                id = cliente.Id.ToString()
            }, cliente);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Cliente cli)
        {
            var cliente = clientservice.GetById(id);

            if (cliente == null)
            {
                return NotFound();
            }

            clientservice.Update(id, cli);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult DeleteById(string id)
        {
            var cliente = clientservice.GetById(id);

            if (cliente == null)
            {
                return NotFound();
            }

            clientservice.DeleteById(cliente.Id);

            return NoContent();
        }
    }

    
}

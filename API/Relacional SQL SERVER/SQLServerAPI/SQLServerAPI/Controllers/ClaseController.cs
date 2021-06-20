using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
    public class ClaseController : ControllerBase
    {
        private readonly AdminStoreContext context;
        public ClaseController(AdminStoreContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Clase> Get()
        {
            return context.Clase.ToList();
        }

        [HttpGet("{id}")]
        public Clase GetById(int codigo)
        {
            var clase = context.Clase.FirstOrDefault(c => c.codigo == codigo);
            return clase;
        }

        [HttpPost]
        public ActionResult Create(Clase clase)
        {
            try
            {
                context.Clase.Add(clase);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }



        [HttpPut("{id}")]
        public IActionResult Update(int codigo, Clase clase)
        {
            if (clase.codigo == codigo)
            {
                context.Entry(clase).State = EntityState.Modified;
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteById(int codigo)
        {
       
            var clase = context.Clase.FirstOrDefault(c => c.codigo == codigo);
            if (clase != null)
            {
                context.Clase.Remove(clase);
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}

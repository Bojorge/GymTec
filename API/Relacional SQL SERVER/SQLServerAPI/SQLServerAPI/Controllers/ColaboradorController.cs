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
    public class ColaboradorController : ControllerBase
    {
        private readonly AdminStoreContext context;
        public ColaboradorController(AdminStoreContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Colaborador> Get()
        {
            return context.Colaborador.ToList();
        }

        [HttpGet("{id}")]
        public Colaborador GetById(int id)
        {
            var colaborador = context.Colaborador.FirstOrDefault(m => m.cedula == id);
            return colaborador;
        }

        [HttpPost]
        public ActionResult Create(Colaborador colaborador)
        {
            try
            {
                context.Colaborador.Add(colaborador);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }



        [HttpPut("{id}")]
        public IActionResult Update(int id, Colaborador colaborador)
        {
          if (colaborador.cedula == id)
            {
                context.Entry(colaborador).State = EntityState.Modified;
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteById(int id)
        {
            var colaborador = context.Colaborador.FirstOrDefault(m => m.cedula == id);
            if(colaborador != null)
            {
                context.Colaborador.Remove(colaborador);
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

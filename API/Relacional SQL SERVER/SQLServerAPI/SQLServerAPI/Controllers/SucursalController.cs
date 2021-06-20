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
    public class SucursalController : ControllerBase
    {
        private readonly AdminStoreContext context;
        public SucursalController(AdminStoreContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Sucursal> Get()
        {                      
            return context.Sucursal.ToList();
        }

        [HttpGet("{id}")]
        public Sucursal GetById(string nombre)
        {
            var sucursal = context.Sucursal.FirstOrDefault(s => s.nombre == nombre);
            return sucursal;
        }

        [HttpPost]
        public ActionResult Create(Sucursal sucursal)
        {
            try
            {
                context.Sucursal.Add(sucursal);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }



        [HttpPut("{id}")]
        public IActionResult Update(string nombre, Sucursal sucursal)
        {
            if (sucursal.nombre == nombre)
            {
                context.Entry(sucursal).State = EntityState.Modified;
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteById(string nombre)
        {
            //int? adminNulo = null;
            //Sucursal exSucursal = new Sucursal();
            var sucursal = context.Sucursal.FirstOrDefault(s => s.nombre == nombre);
            if (sucursal != null)
            {
                /*
                exSucursal.nombre = sucursal.nombre;
                exSucursal.provincia = sucursal.provincia;
                exSucursal.canton = sucursal.canton;
                exSucursal.distrito = sucursal.distrito;
                exSucursal.fecha_apertura = sucursal.fecha_apertura;
                exSucursal.capacidad = sucursal.capacidad;
                exSucursal.horario = sucursal.horario;
                exSucursal.administrador = (int)adminNulo;
                context.Entry(exSucursal).State = EntityState.Modified;
                context.SaveChanges();
                */
                context.Sucursal.Remove(sucursal);
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

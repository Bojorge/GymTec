using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SQLServerAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SQLServerAPI.Controllers;
using SQLServerAPI.ConnectionDB;

namespace SQLServerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly AdminStoreContext context;

        public LoginController(AdminStoreContext context)
        {
            this.context = context;
        }




        [HttpPost]
        public Boolean validate(Validar validar)
        {
         
            List<Colaborador> colaboradores = context.Colaborador.ToList();
            UsuarioLogeado usuario;
            Boolean acceso = false;

            //recorre la lista de clientes y verifica si el correo y la contraseña con el que se hace login estan asignados a 1 cliente
            foreach (Colaborador colaborador in colaboradores)
            {
                if (colaborador.correo == validar.correo && colaborador.contrasena == validar.contrasena)
                {
                    usuario = new UsuarioLogeado();
                    usuario.cedula = colaborador.cedula;
                    usuario.correo = colaborador.correo;
                    usuario.contrasena = colaborador.contrasena;
                    usuario.nombre = colaborador.nombre;
                    usuario.apellido1 = colaborador.apellido1;
                    usuario.apellido2 = colaborador.apellido2;
                    usuario.provincia = colaborador.provincia;
                    usuario.canton = colaborador.canton;
                    usuario.distrito = colaborador.distrito;
                    usuario.rol = colaborador.rol;
                    usuario.sucursal = colaborador.sucursal;


                    context.UsuarioLogeado.Add(usuario);
                    context.SaveChanges();
                    acceso = true;
                }
            }          
            return acceso;
        }
    }
}

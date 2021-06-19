using Microsoft.EntityFrameworkCore;
using SQLServerAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace SQLServerAPI.ConnectionDB
{
    public class AdminStoreContext: DbContext
    {
        public AdminStoreContext(DbContextOptions<AdminStoreContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=tcp:admingymtec-server.database.windows.net,1433;Initial Catalog=admingymtec;Persist Security Info=False;User ID=Bojorge;Password=@nimal35;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
        }

        public DbSet<UsuarioLogeado> UsuarioLogeado { get; set; }     
        public DbSet<Tipo_Equipo> Tipo_Equipo { get; set; }
        public DbSet<Maquina> Maquina { get; set; } 
        public DbSet<Tipo_Planilla> Tipo_Planilla { get; set; }
        public DbSet<Rol> Rol { get; set; }
        public DbSet<Sucursal> Sucursal { get; set; }
        public DbSet<Colaborador> Colaborador { get; set; }
        public DbSet<Telefono> Telefono { get; set; }
        public DbSet<Clase> Clase { get; set; }
        public DbSet<Producto> Producto { get; set; }
        public DbSet<Tratamiento_Spa> Tratamiento_Spa { get; set; }
        
    }
}

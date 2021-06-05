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

        public DbSet<Maquina> Maquina { get; set; }

    }
}

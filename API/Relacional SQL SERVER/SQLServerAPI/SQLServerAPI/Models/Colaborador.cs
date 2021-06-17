using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SQLServerAPI.Models
{
    public class Colaborador
    {
        [Key]
        public int cedula { get; set; }
        public string correo { get; set; }
        public string contrasena { get; set; }
        public string nombre { get; set; }
        public string apellido1 { get; set; }
        public string apellido2 { get; set; }
        public string provincia { get; set; }
        public string canton { get; set; }
        public string distrito { get; set; }
        public int rol { get; set; }
        public string sucursal { get; set; }
    }
}

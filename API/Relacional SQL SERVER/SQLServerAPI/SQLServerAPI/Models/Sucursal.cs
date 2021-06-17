using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SQLServerAPI.Models
{
    public class Sucursal
    {
        [Key]
        public string nombre { get; set; }
        public string provincia { get; set; }
        public string canton { get; set; }
        public string distrito { get; set; }
        public DateTime fecha_apertura { get; set; }
        public int capacidad { get; set; }
        public string horario { get; set; }
        public int administrador { get; set; }
    }
}

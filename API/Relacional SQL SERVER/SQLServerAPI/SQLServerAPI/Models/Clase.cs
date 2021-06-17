using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SQLServerAPI.Models
{
    public class Clase
    {
        [Key]
        public int codigo { get; set; }
        public string nombre { get; set; }
        public int costo { get; set; }
        public DateTime fecha { get; set; }
        public DateTime hora_inicio { get; set; }
        public DateTime hora_fin { get; set; }
        public string tipo_clase { get; set; }
        public int capacidad { get; set; }
        public int instructor { get; set; }
        public int rol { get; set; }

    }
}

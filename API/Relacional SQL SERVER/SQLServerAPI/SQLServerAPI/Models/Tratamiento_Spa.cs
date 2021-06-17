using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SQLServerAPI.Models
{
    public class Tratamiento_Spa
    {
        [Key]
        public int codigo { get; set; }
        public string nombre { get; set; }
        public int costo { get; set; }
        public int rol { get; set; }
    }
}

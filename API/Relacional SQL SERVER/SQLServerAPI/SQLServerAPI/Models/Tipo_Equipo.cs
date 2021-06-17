using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace SQLServerAPI.Models
{
    public class Tipo_Equipo
    {
        [Key]
        public int codigo { get; set; }
        public string nombre { get; set; }
    }
}

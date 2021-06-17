using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SQLServerAPI.Models
{
    public class Rol
    {
        [Key]
        public int codigo { get; set; }
        public string descripcion { get; set; }
        public int tipo_planilla { get; set; }
    }
}

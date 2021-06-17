using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SQLServerAPI.Models
{
    public class Tipo_Planilla
    {
        [Key]
        public int codigo { get; set; }
        public string descripcion { get; set; }
        public int pago_clase { get; set; }
        public int pago_hora { get; set; }
        public int pago_mes { get; set; }

    }
}

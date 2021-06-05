using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SQLServerAPI.Models
{
    public class Maquina
    {
        [Key]
        public string serie { get; set; }
        public string sucursal { get; set; }
        public string descripcion { get; set; }
        public string marca { get; set; }
        public string costo { get; set; }
    }
}

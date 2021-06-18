using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace SQLServerAPI.Models
{
    public class Prueba
    {
        [Key]
        public int serie { get; set; }
        public string com { get; set; }
    }
}

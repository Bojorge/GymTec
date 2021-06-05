using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MongoDBAPI.Models
{
    public class Cliente
    {
        [BsonId]
        [BsonRepresentation (BsonType.ObjectId)]
        public string Id { get; set; }
        public string cedula { get; set; }
        public string correo { get; set; }
        public string contrasena { get; set; }
        public string nombre { get; set; }
        public string apellido1 { get; set; }
        public string apellido2 { get; set; }
        public string provincia { get; set; }
        public string canton { get; set; }
        public string distrito { get; set; }
        public string fecha_nacimiento { get; set; }
        public string edad { get; set; }
        public string peso { get; set; }
        public string imc { get; set; }

    }
}

// Crear base de datos
use('constru-tech');


//Crear coleccion obras
db.createCollection("obras");

//Crear coleccion empleados
db.createCollection("empleados");


//Validacion de campos
db.createCollection("clientes", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Validacion de cliente",
         required: [ "nombres", "apellidos", "telefono", "direccion", "estado" ],
         properties: {
            nombres: {
               bsonType: "string",              
               description: "'nombres' Debe ser alfanumerico, es requerido y debe tener entre 3 y 20 caracteres"
            },
            apellidos: {
               bsonType: "string",              
               description: "'apellidos' Debe ser alfanumerico, es requerido y debe tener entre 3 y 30 caracteres"
            },
            telefono: {
               bsonType: "string",
               description: "'telefono' es requerido y debe tener entre 8 y 15 caracteres"
            },
            direccion: {
               bsonType: "string",               
               description: "'direccion' Debe ser alfanumerico, es requerido y debe tener entre 5 y 50 caracteres"
            },
            estado: {
               enum:["activo","inactivo"],
               description: "en el campo estado solo se permite activo o inactivo"
            }            
         }
      }
   }
} )

//Validacion de campos empleados
db.createCollection("empleados", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Validacion de cliente",
         required: [ "nombres", "cedula", "telefono", "direccion", "estado" ],
         properties: {
            nombres: {
               bsonType: "string",              
               description: "'nombres' Debe ser alfanumerico, es requerido y debe tener entre 3 y 20 caracteres"
            },
            cedula: {
               bsonType: ["array"], 
               minItems:2,             
               description: "'cedula' es requerido debe ser un array de al menos 2 items"
            },
            telefono: {
               bsonType: "string",
               description: "'telefono' es requerido y debe tener entre 8 y 15 caracteres"
            },
            direccion: {
               bsonType: ["array"],
               minItems: 2,               
               description: "'direccion' requerido y debe ser un array de minimo 2 items"
            },
            estado: {
               enum:["activo","inactivo"],
               description: "en el campo estado solo se permite activo o inactivo"
            }            
         }
      }
   }
})


//Validacion de campos obras
db.createCollection("obras", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Validacion de cliente",
         required: [ "descripcion", "fecha", "cantidad", "estado"],
         properties: {
            descripcion: {
               bsonType: "string",              
               description: "'descripcion' Debe ser alfanumerico, es requerido y debe tener entre 3 y 20 caracteres"
            },
            fecha: {
               bsonType: ["array"], 
               minItems:1,             
               description: "'fecha' es requerido debe ser un array de al menos 1 item"
            },
            cantidad: {
               bsonType: "int",              
               description: "'cantidad' Debe ser numerico y es requerido"
            },            
            estado: {
               enum:["activo","inactivo"],
               description: "en el campo estado solo se permite activo o inactivo"
            }            
         }
      }
   }
})

//InsertOne
db.clientes.insertOne( {
   nombres: "Kevin",
   apellidos: "Castrillon",
   estado: "activo",
   telefono:"1234578",
   direccion:"Carrera 42C"
});

//InserMany
db.clientes.insertMany([ 
    {
        nombres: "Ronald",
        apellidos: "Ortiz",
        estado: "inactivo",
        telefono:"102030517",
        direccion:"Carrera 40-100"
    },
    {
        nombres: "Pilar",
        apellidos: "Calderon",
        estado: "inactivo",
        telefono:"1234578",
        direccion:"Carrera 42C"
    }, 
    {
        nombres: "Yeison",
        apellidos: "Pulgarin",
        estado: "inactivo",
        telefono:"87654321",
        direccion:"Carrera 100C"
    },           
]);

//find all
db.clientes.find({})
//find con where
db.clientes.find({estado:{$eq:"activo"}})

//findOne
db.clientes.findOne(
    {
        $or: [
            //mostrar el primer documento que encuentre con letra k en el campo nombres o que tenga estado activo
            {"nombres":/^k/},
            {"estado":"activo"}
        ]
    }
)

//updateOne sin upsert
db.clientes.updateOne(
    {"telefono":"1234578"},
    {$set:{"telefono":"1234567890"}}
)

//updateOne con upsert
db.clientes.updateOne(
    {"telefono":"1234578"},
    {
        $set:{"telefono":"1234578","nombres":"Gisela","apellidos":"Castrillon","direccion":"Carrera 45A","estado":"activo"}
    },
    {upsert:true}
)

//updateMany sin upsert
db.clientes.updateMany(
    {
        direccion:/^Carrera/
    },
    {
        $set:{"direccion":"Street 12-45A"}
    }
)
//updateMany con upsert
db.clientes.updateMany(
    {
        direccion:/^Carrera/
    },
    {
        $set:{"telefono":"9876543210","nombres":"Steven","apellidos":"Castrillon","direccion":"Carrera 45A","estado":"activo"}
    },
    {
        upsert:true
    }
)

//deleteOne
db.clientes.deleteOne({
    "_id": ObjectId("646dc8d48c0466f240120fbb")
})

//deleteMany
db.clientes.deleteMany({});

//drop collection
db.clientes.drop();

//drop database
db.dropDatabase()
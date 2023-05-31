//Paso 1
/*-------------------------------------*/
// Crear base de datos
use('constru-tech');
/*-------------------------------------*/

//Fin paso 1
//Paso 2 en caso de no requerir validaciones
/*-------------------------------------*/
//Crear coleccion obras
// db.createCollection("obras");

//Crear coleccion empleados
// db.createCollection("empleados");

//Crear coleccion clientes
// db.createCollection("clientes");
/*-------------------------------------*/
//Fin paso2 sin validaciones

//Paso 2 en caso de requerir validaciones en los campos de las colecciones
/*-------------------------------------*/
//Validacion de campos y creacion de coleccion clientes
// db.createCollection("clientes", {
//    validator: {
//       $jsonSchema: {
//          bsonType: "object",
//          title: "Validacion de cliente",
//          required: [ "nombres", "apellidos", "telefono", "direccion", "estado" ],
//          properties: {
//             nombres: {
//                bsonType: "string",              
//                description: "'nombres' Debe ser alfanumerico, es requerido y debe tener entre 3 y 20 caracteres"
//             },
//             apellidos: {
//                bsonType: "string",              
//                description: "'apellidos' Debe ser alfanumerico, es requerido y debe tener entre 3 y 30 caracteres"
//             },
//             telefono: {
//                bsonType: "string",
//                description: "'telefono' es requerido y debe tener entre 8 y 15 caracteres"
//             },
//             direccion: {
//                bsonType: "string",               
//                description: "'direccion' Debe ser alfanumerico, es requerido y debe tener entre 5 y 50 caracteres"
//             },
//             estado: {
//                enum:["activo","inactivo"],
//                description: "en el campo estado solo se permite activo o inactivo"
//             }            
//          }
//       }
//    }
// } )

//Validacion de campos y creacion de coleccion empleados 
// db.createCollection("empleados", {
//    validator: {
//       $jsonSchema: {
//          bsonType: "object",
//          title: "Validacion de empleados",
//          required: [ "nombres", "cedula", "telefono", "direccion", "estado" ],
//          properties: {
//             nombres: {
//                bsonType: "string",              
//                description: "'nombres' Debe ser alfanumerico, es requerido y debe tener entre 3 y 20 caracteres"
//             },
//             cedula: {
//                bsonType: ["array"], 
//                minItems:2,             
//                description: "'cedula' es requerido debe ser un array de al menos 2 items"
//             },
//             telefono: {
//                bsonType: "string",
//                description: "'telefono' es requerido y debe tener entre 8 y 15 caracteres"
//             },
//             direccion: {
//                bsonType: ["array"],
//                minItems: 2,               
//                description: "'direccion' requerido y debe ser un array de minimo 2 items"
//             },
//             estado: {
//                enum:["activo","inactivo"],
//                description: "en el campo estado solo se permite activo o inactivo"
//             }            
//          }
//       }
//    }
// })


//Validacion de campos y creacion de coleccion obras
// db.createCollection("obras", {
//    validator: {
//       $jsonSchema: {
//          bsonType: "object",
//          title: "Validacion de obras",
//          required: [ "descripcion", "fecha", "cantidad", "estado"],
//          properties: {
//             descripcion: {
//                bsonType: "string",              
//                description: "'descripcion' Debe ser alfanumerico, es requerido y debe tener entre 3 y 20 caracteres"
//             },
//             fecha: {
//                bsonType: ["array"], 
//                minItems:1,             
//                description: "'fecha' es requerido debe ser un array de al menos 1 item"
//             },
//             cantidad: {
//                bsonType: "string",              
//                description: "'cantidad' Debe ser numerico y es requerido"
//             },            
//             estado: {
//                enum:["pendiente","proceso","terminado"],
//                description: "en el campo estado solo se permite activo o inactivo"
//             }            
//          }
//       }
//    }
// })
/*-------------------------------------*/
//Fin paso 2 con validaciones
//Paso 3 poblar la base de datos con comandos de mongodb
//NOTA: EN  CASO DE REQUERIR LOS POBLAR LA BASE DE DATOS CON MUCHOS DOCUMENTOS DEBES SEGUIR LOS PASOS QUE SE EN CUENTRAN EN EL ARCHIVO crud.js EN LA RAIZ DEL PROYECTO, ANTES DE SEGUIR ESOS PASOS DEBES HABER REALIZADO EL PASO 1 Y 2 DE ESTE ARCHIVO
/*-------------------------------------*/
//InsertOne, insertar documentos de forma individual
// db.clientes.insertOne( {
//    nombres: "Kevin",
//    apellidos: "Castrillon",
//    estado: "activo",
//    telefono:"1234578",
//    direccion:"Carrera 42C"
// });

//InserMany, insertar varios documentos agrupados por objeto
// db.clientes.insertMany([ 
//     {
//         nombres: "Ronald",
//         apellidos: "Ortiz",
//         estado: "inactivo",
//         telefono:"102030517",
//         direccion:"Carrera 40-100"
//     },
//     {
//         nombres: "Pilar",
//         apellidos: "Calderon",
//         estado: "inactivo",
//         telefono:"1234578",
//         direccion:"Carrera 42C"
//     }, 
//     {
//         nombres: "Yeison",
//         apellidos: "Pulgarin",
//         estado: "inactivo",
//         telefono:"87654321",
//         direccion:"Carrera 100C"
//     },           
// ]);
/*-------------------------------------*/
//Fin paso 3

//Paso 4 (opcional) en caso de requerir cualquiera de los siguientes comandos para obtener, modificar, eliminar, realizar joins y demas ejecuta los siguientes comandos
/*-------------------------------------*/
//find all, obtener todos los documentos de una coleccion
// db.clientes.find({})
//find con where, obtener todos los documentos de una coleccion filtrados con una condicion
// db.clientes.find({estado:{$eq:"activo"}})

//findOne, obtener un documento que cumpla una condicion
// db.clientes.findOne(
//     {
//         $or: [
//             //mostrar el primer documento que encuentre con letra k en el campo nombres o que tenga estado activo
//             {"nombres":/^k/},
//             {"estado":"activo"}
//         ]
//     }
// )

//updateOne sin upsert, actualizar un documento sin upsert
// db.clientes.updateOne(
//     {"telefono":"1234578"},
//     {$set:{"telefono":"1234567890"}}
// )

//updateOne con upsert, actualizar un documento con upsert (el upsert hace que en caso de no encontrar un documento con la condicion creara uno nuevo con los valores que se definan en el $set)
// db.clientes.updateOne(
//     {"telefono":"1234578"},
//     {
//         $set:{"telefono":"1234578","nombres":"Gisela","apellidos":"Castrillon","direccion":"Carrera 45A","estado":"activo"}
//     },
//     {upsert:true}
// )

//updateMany sin upsert, actualizar multiples documentos sin upsert
// db.clientes.updateMany(
//     {
//         direccion:/^Carrera/
//     },
//     {
//         $set:{"direccion":"Street 12-45A"}
//     }
// )
//updateMany con upsert, el upsert hace que en caso de no encontrar documentos con la condicion creara nuevos con los valores que se definan en el $set
// db.clientes.updateMany(
//     {
//         direccion:/^Carrera/
//     },
//     {
//         $set:{"telefono":"9876543210","nombres":"Steven","apellidos":"Castrillon","direccion":"Carrera 45A","estado":"activo"}
//     },
//     {
//         upsert:true
//     }
// )

//deleteOne, eliminar un documento que cumpla una condicion
// db.clientes.deleteOne({
//     "_id": ObjectId("646dc8d48c0466f240120fbb")
// })

//deleteMany, eliminar todos los documentos de una coleccion
//db.clientes.deleteMany({});

//drop collection, eliminar coleccion
//db.clientes.drop();

//drop database, eliminar base de datos seleccionada con use
//db.dropDatabase()


//$lookup entre obras y empleados, 
// db.obras.aggregate([
//     {
//         $lookup: {
//           from: "empleados",
//           localField: "idEmpl",
//           foreignField: "_id",
//           as: "detalle_empleado"
//         }
//     }
// ]);

//$lookup entre obras y clientes
// db.obras.aggregate([
//     {
//         $lookup: {
//           from: "clientes",
//           localField: "idCli",
//           foreignField: "_id",
//           as: "detalle_cliente"
//         }
//     }
// ]);

//pipeline 1 de 3 etapas, contar los clientes con estado inactivo pero saltando 5
// db.clientes.aggregate([
//     {
//         $match: {
//           estado:"inactivo"
//         }
//     },
//     {
//         $skip: 5
//     },
//     {
//         $count: 'clientes_inactivos'
//     }
// ]);

//pipeline 2 de 3 etapas, cambiar el estado de las obras que esten activas a finalizado y que las muestre agrupadas por _id, estado y descripcion
// db.obras.aggregate([
//     {
//       $match: {
//         estado:"activo"
//       }
//     },
//     {
//       $set: {
//         estado: "finalizado"
//       }
//     },
//     {
//       $group: {
//         _id: {_id: "$_id", estado:"$estado", descripcion:"$descripcion"}
//       }
//     }
// ]);

//Ejemplo $limit, buscar los clientes cuyo empiecen por 'Ka' limitando la busqueda a 20
// db.clientes.aggregate([
//     {
//       $match: {
//         $or:[
//           {"nombres":{$regex:'.*'+'Ka'+'.*', $options: 'i'}}
//         ]
//       }
//     },
//     {
//       $limit: 20
//     }
// ]);
//Ejemplo $sort, traer los clientes activos y ordenarlos de la "Z a la A"
// db.clientes.aggregate([
//     {
//       $match: {
//         estado:"activo"
//       }
//     },
//     {
//       $sort: {nombres:-1}
//     }
// ]);
//Ejemplo $unwind con el campo direccion de la coleccion empleados
// db.empleados.aggregate([
//   {
//     $unwind:"$direccion"
//   }
// ]);
/*-------------------------------------*/
//fin paso 4
//exportacion de operaciones(crud) desde archivo crud.js
const operaciones = require('./crud');

//exportacion de libreria faker
const {faker} = require("@faker-js/faker");


const array_clientes = []; 
// //crear bucle para poblar la coleccion de clientes
for (let i = 0; i < 2010; i++) {
    //crear array con estados validos para asignarlos a cada cliente
    const estados = ["activo","inactivo"];
    //crear un random entre los indices que existe en el array de estados para generar uno aleatoriamente cuando se guarda un cliente
    const random = Math.floor(Math.random() * estados.length);

    //se ejecuta funcion agregarCliente previamente exportada para agregar un cliente dentro del bucle con sus campos requeridos en el @valid schema, estos campos son generados por la libreria faker
    cliente ={
        nombres: faker.person.firstName(),
        apellidos: faker.person.lastName(),
        //se asigna estado creado aleatoriamente
        estado: estados[random],
        //formato de numero
        telefono:faker.phone.number('3##-###-##-##'),
        direccion:faker.location.streetAddress({ useFullAddress: true })
    }
    array_clientes.push(cliente);
}  
operaciones.agregarCliente(array_clientes);


// const array_empleados =[];

// for (let i = 0; i < 2010;) {
//     //crear array con estados validos para asignarlos a cada cliente
//     const estados = ["activo","inactivo"];
//     i++;
//     //crear un random entre los indices que existe en el array de estados para generar uno aleatoriamente cuando se guarda un cliente
//     const random = Math.floor(Math.random() * estados.length);

//     //se ejecuta funcion agregarCliente previamente exportada para agregar un cliente dentro del bucle con sus campos requeridos en el @valid schema, estos campos son generados por la libreria faker
//     empleado ={
//         nombres: faker.person.firstName()+" "+faker.person.lastName(),
        
//         cedula: [faker.helpers.arrayElement(['CC', 'CE', 'CNV', 'P', "PT"]), faker.number.int()],
//         //se asigna estado creado aleatoriamente
//         estado: estados[random],
//         //formato de numero
//         telefono:"'"+faker.phone.number('3##-###-##-##')+"'",
//         direccion:[faker.location.city(), faker.location.streetAddress({ useFullAddress: true })]
        
//     }
//     array_empleados.push(empleado)
// }

// operaciones.agregarEmpleado(array_empleados)

// const array_obras= []
// for (let i = 0; i < 2010; i++) {
//         //crear array con estados validos para asignarlos a cada cliente
//         const estados = ["activo","inactivo"];
        
//         //crear un random entre los indices que existe en el array de estados para generar uno aleatoriamente cuando se guarda un cliente
//         const random = Math.floor(Math.random() * estados.length);
//     obra = {
//         idEmpl:"",
//         idCli:"",
//         descripcion: faker.helpers.arrayElement(['Construccion con Drywall', 'Reparacion de plomeria', 'Instalacion de gas', 'Pintar fachada', "Estucado"]),
//         fecha: ["'"+faker.date.past()+"'","'"+faker.date.recent()+"'"],
//         //se asigna estado creado aleatoriamente
//         estado: estados[random],
//         //formato de numero
//         cantidad:faker.number.bigInt(),


//     }
//     array_obras.push(obra)
// }

// operaciones.agregarObra(array_obras)

// console.log(array_obras.length)


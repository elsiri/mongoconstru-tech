//exportacion de operaciones(crud) desde archivo crud.js
const operaciones = require('./crud');

//exportacion de libreria faker
const {faker} = require("@faker-js/faker");



// setTimeout(() => {
//     // //crear bucle para poblar la coleccion de clientes
//     for (let i = 0; i < 500; i++) {
//         //crear array con estados validos para asignarlos a cada cliente
//         const estados = ["activo","inactivo"];
        
//         //crear un random entre los indices que existe en el array de estados para generar uno aleatoriamente cuando se guarda un cliente
//         const random = Math.floor(Math.random() * estados.length);

//         //se ejecuta funcion agregarCliente previamente exportada para agregar un cliente dentro del bucle con sus campos requeridos en el @valid schema, estos campos son generados por la libreria faker
//         operaciones.agregarCliente({
//         nombres: faker.person.firstName(),
//         apellidos: faker.person.lastName(),
//         //se asigna estado creado aleatoriamente
//         estado: estados[random],
//         //formato de numero
//         telefono:faker.phone.number('3##-###-##-##'),
//         direccion:faker.location.streetAddress({ useFullAddress: true })
//     })
        
//     }    
// }, 20000);
const array_obras= []
for (let i = 0; i < 2010; i++) {
        //crear array con estados validos para asignarlos a cada cliente
        const estados = ["activo","inactivo"];
        
        //crear un random entre los indices que existe en el array de estados para generar uno aleatoriamente cuando se guarda un cliente
        const random = Math.floor(Math.random() * estados.length);
    obra = {
        idEmpl:"",
        idCli:"",
        descripcion: faker.helpers.arrayElement(['Construccion con Drywall', 'Reparacion de plomeria', 'Instalacion de gas', 'Pintar fachada', "Estucado"]),
        fecha: ["'"+faker.date.past()+"'","'"+faker.date.recent()+"'"],
        //se asigna estado creado aleatoriamente
        estado: estados[random],
        //formato de numero
        cantidad:faker.number.bigInt(),


    }
    array_obras.push(obra)
}

console.log(array_obras.length)
operaciones.agregarObra(array_obras)
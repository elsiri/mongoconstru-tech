//Paso 1 
/*-------------------------------------*/
//exportacion de operaciones(crud) desde archivo crud.js
const operaciones = require('./crud');

//exportacion de libreria faker
const {faker} = require("@faker-js/faker");
/*-------------------------------------*/
//Fin paso 1

//Paso 2  
/*-------------------------------------*/
//se crea array de clientes
const array_clientes = []; 
// //crear bucle para poblar la coleccion de clientes
for (let i = 0; i < 2010; i++) {
    //crear array con estados validos para asignarlos a cada cliente
    const estados = ["activo","inactivo"];
    //crear un random entre los indices que existe en el array de estados para generar uno aleatoriamente cuando se guarda un cliente
    const random = Math.floor(Math.random() * estados.length);

    //se crea un objeto cliente para definir sus propiedades requeridas en las validaciones de la coleccion, estas propiedades se crean con la libreria faker
    cliente ={
        nombres: faker.person.firstName(),
        apellidos: faker.person.lastName(),
        //se asigna estado creado aleatoriamente
        estado: estados[random],
        //formato de numero
        telefono:faker.phone.number('3##-###-##-##'),
        direccion:faker.location.streetAddress({ useFullAddress: true })
    }
    //se añade el objeto cliente creado dentro del bucle al array de clientes
    array_clientes.push(cliente);
}  
//se envia el array de clientes a la funcion exportada agregarCliente
operaciones.agregarCliente(array_clientes);

//se crea array de empleados
const array_empleados =[];
//crear bucle para poblar coleccion de empleados
for (let i = 0; i < 2010;) {
    //crear array con estados validos para asignarlos a cada empleado
    const estados = ["activo","inactivo"];
    i++;
    //crear un random entre los indices que existe en el array de estados para generar uno aleatoriamente cuando se guarda un empleado
    const random = Math.floor(Math.random() * estados.length);

    //se crea un objeto empleado para definir sus propiedades requeridas en las validaciones de la coleccion, estas propiedades se crean con la libreria faker
    empleado ={
        nombres: faker.person.firstName()+" "+faker.person.lastName(),
        cedula: [faker.helpers.arrayElement(['CC', 'CE', 'CNV', 'P', "PT"]), faker.number.int()],
        //se asigna estado creado aleatoriamente
        estado: estados[random],
        //formato de numero
        telefono:"'"+faker.phone.number('3##-###-##-##')+"'",
        direccion:[faker.location.city(), faker.location.streetAddress({ useFullAddress: true })]
    }
    //se añade el objeto empleado creado dentro del bucle al array de empleados
    array_empleados.push(empleado)
}
//se envia el array de empleados a la funcion exportada agregarEmpleado
operaciones.agregarEmpleado(array_empleados)

//se crea array de obras
const array_obras= []
//crear bucle para poblar coleccion de obras
for (let i = 0; i < 2010; i++) {
        //crear array con estados validos para asignarlos a cada obra
        const estados = ["activo","inactivo"];
        
        //crear un random entre los indices que existe en el array de estados para generar uno aleatoriamente cuando se guarda un obra
        const random = Math.floor(Math.random() * estados.length);
    //se crea un objeto empleado para definir sus propiedades requeridas en las validaciones de la coleccion, estas propiedades se crean con la libreria faker
    obra = {
        //se crean campos de llaves foraneas de empleados y clientes, para guardarlas posteriormente
        idEmpl:"",
        idCli:"",
        descripcion: faker.helpers.arrayElement(['Construccion con Drywall', 'Reparacion de plomeria', 'Instalacion de gas', 'Pintar fachada', "Estucado"]),
        fecha: ["'"+faker.date.past()+"'","'"+faker.date.recent()+"'"],
        //se asigna estado creado aleatoriamente
        estado: estados[random],
        //formato de numero
        cantidad:faker.number.bigInt(),
    }
    //se añade el objeto obra creado dentro del bucle al array de obras
    array_obras.push(obra)
}
//se envia el array de obras a la funcion exportada agregarObra
operaciones.agregarObra(array_obras)
/*-------------------------------------*/
//Fin paso 1

//Paso 2
/*-------------------------------------*/
//NOTA: LAS SIGUIENTES FUNCIONES SE DEBEN EJECUTAR UNA VEZ SE HAYAN EJECUTADO TODOS LOS BUCLES DEL PASO ANTEIOR
//se ejectuta funcion setIdEmpleados para asignar un empleado a cada obra creada previamente 
// operaciones.setIdEmpleados();
//se ejecuta funcion setIdClientes para asignar un cliente a cada obra creada previamente
// operaciones.setIdClientes();

//Paso 3 (opcional) en caso de requerir realizar funciones de aggregate como $lookup ve al archivo comandos mongo que se encuentra en la carpeta "mongo_background", las funciones de aggregate estan en el paso 4 de ese archivo
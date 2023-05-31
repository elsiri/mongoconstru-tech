//Paso 1
/*-------------------------------------*/
//exportacion de libreria mongodb
const { MongoClient } = require('mongodb');
//credenciales de accesso a cluster de mongodb
const uri = 'mongodb+srv://kevincastrillon31:admin123@clusterkevin.lmjqevf.mongodb.net/?retryWrites=true&w=majority';
/*-------------------------------------*/
//Fin paso 1

//Paso 2 crear funciones para agregar documentos en las colecciones de clientes, empleados y obras
/*-------------------------------------*/
//crear funcion asincrona para guardar clientes, recibiendo como parametro un array de objetos con propiedades de dicho objeto, debe realizarse con la funcion insertMany de mongodb
async function agregarCliente(clienteNuevo){

    //se instancia conexion a mongodb con las credenciales anterior mencionadas
    const client = new MongoClient(uri);

    //se crea try/catch/finally para hacer seguimiento de la funcion agregarCliente
    try {

        //se realiza conexion con await para garantizar que se conecte primero antes de realizar otra operacion
        await client.connect();

        //se realiza el guardado de los clientes y se guarda el resultado del query en una variable
        const result = await client.db('construtech').collection('clientes').insertMany(clienteNuevo);

        //se crea mensaje de guardado exitoso
        console.log(`Clientes agregados con exito`);
    
    } catch (error) {

        //se crea mensaje de error en caso de que falle la conexion o el guardado del cliente
        console.log(error);
    
    } finally {

        //se cierra la conexion con base de datos por seguridad
        await client.close();
    
    }

}

//crear funcion asincrona para guardar obras, recibiendo como parametro un array objetos con propiedades de dicho objeto, debe realizarse con la funcion insertMany de mongodb
async function agregarObra(obraNueva){

    //se instancia conexion a mongodb con las credenciales anterior mencionadas
    const client = new MongoClient(uri);

    //se crea try/catch/finally para hacer seguimiento de la funcion agregarObra
    try {

        //se realiza conexion con await para garantizar que se conecte primero antes de realizar otra operacion
        await client.connect();

        //se realiza el guardado de las obras y se guarda el resultado del query en una variable
        const result = await client.db('construtech').collection('obras').insertMany(obraNueva);

        //se crea mensaje de guardado exitoso
        console.log(`Obras agregadas con exito`);
    
    } catch (error) {

        //se crea mensaje de error en caso de que falle la conexion o el guardado de la obra
        console.log(error);
    
    } finally {
        
        //se cierra la conexion con base de datos por seguridad
        await client.close();
    
    }

}

//crear funcion asincrona para guardar empleados, recibiendo como parametro un array de objetos con propiedades de dicho objeto, debe realizarse con la funcion insertMany de mongodb
async function agregarEmpleado(empleadoNuevo){

    //se instancia conexion a mongodb con las credenciales anterior mencionadas
    const client = new MongoClient(uri);

    //se crea try/catch/finally para hacer seguimiento de la funcion agregarEmpleado
    try {

        //se realiza conexion con await para garantizar que se conecte primero antes de realizar otra operacion
        await client.connect();

        //se realiza el guardado de los empleados y se guarda el resultado del query en una variable
        const result = await client.db('construtech').collection('empleados').insertMany(empleadoNuevo);

        //se crea mensaje de guardado exitoso
        console.log(`Empleados agregados con exito`);
    } catch (error) {

        //se crea mensaje de error en caso de que falle la conexion o el guardado del cliente
        console.log(error);
    
    }

}


//Se crea funcion asincrona para insertar el id de cada empleado en una obra
async function setIdEmpleados(){
    //se instancia conexion a mongodb con las credenciales anterior mencionadas
    const client = new MongoClient(uri);
    //se crea try/catch para hacer seguimiento de la funcion
    try {
        //se realiza conexion con await para garantizar que se conecte primero antes de realizar otra operacion
        await client.connect();
        //se crea variable projection para filtrar los campos de la coleccion y retornar solo el campo _id
        const projection = {_id: 1};
        //se crea una variable para guardar realizar un ciclo con los empleados de la coleccion y se utiliza el metodo project con el filtro anterior 
        const cursor = client.db('construtech').collection('empleados').find().project(projection);
        //se crea for await tomando como base los documentos del query anterior, se define una variable doc para acceder a cada documento que se encuentra en la variable cursor(esta contiene todos los documentos del query)
        for await (const doc of cursor) {
            //se crea un mensaje con el _id de cada documento que recorre
            console.log(doc._id)
            //se actualiza la coleccion de obras con un updateOne para que actualice cada documento dentro del bucle, asi podriamos actualizar el campo idEmpl de la coleccion de obras asignandole el _id de cada empleado a cada obra
            client.db('construtech').collection('obras').updateOne({"idEmpl":""},{$set:{"idEmpl":doc._id}})
            
        }
    } catch (error) {
        //se crea mensaje en caso de haber un error
        console.log(error)
    }
}
/*-------------------------------------*/
//Fin paso 2


//Paso 3 crear funciones para asignar empleados y clientes a las obras
//NOTA: NO EJECUTAR ESTAS FUNCIONES ANTES DE HABER POBLADO LAS 3 COLECCIONES (empleados, clientes, obras)
/*-------------------------------------*/
async function setIdClientes(){
    //se instancia conexion a mongodb con las credenciales anterior mencionadas
    const client = new MongoClient(uri);
    //se crea try/catch para hacer seguimiento de la funcion
    try {
        //se realiza conexion con await para garantizar que se conecte primero antes de realizar otra operacion
        await client.connect();
        //se crea variable projection para filtrar los campos de la coleccion y retornar solo el campo _id
        const projection = {_id: 1};
        //se crea una variable para guardar realizar un ciclo con los empleados de la coleccion y se utiliza el metodo project con el filtro anterior 
        const result = client.db('construtech').collection('clientes').find().project(projection);
        //se crea for await tomando como base los documentos del query anterior, se define una variable doc para acceder a cada documento que se encuentra en la variable cursor(esta contiene todos los documentos del query)
        for await (const doc of result) {
            //se crea un mensaje con el _id de cada documento que recorre
            console.log(doc._id)
            //se actualiza la coleccion de obras con un updateOne para que actualice cada documento dentro del bucle, asi podriamos actualizar el campo idCli de la coleccion de obras asignandole el _id de cada cliente a cada obra
            client.db('construtech').collection('obras').updateOne({"idCli":""},{$set:{"idCli":doc._id}})   
        }
    } catch (error) {
        //se crea mensaje en caso de haber un error
        console.log(error)
    }
}

/*-------------------------------------*/
//Fin paso 3

//Paso 4 exportar metodos para ser utilizados
module.exports ={
    agregarObra,
    agregarCliente,
    agregarEmpleado,
    setIdClientes,
    setIdEmpleados
}
/*-------------------------------------*/
//Fin paso 4
//NOTA: Seguir los pasos del archivo index.js para poblar las diferentes colecciones, asignar empleados y clientes a obras
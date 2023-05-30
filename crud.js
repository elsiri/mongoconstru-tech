//exportacion de libreria mongodb
const { MongoClient } = require('mongodb');
//credenciales de accesso a cluster de mongodb
const uri = 'mongodb+srv://kevincastrillon31:admin123@clusterkevin.lmjqevf.mongodb.net/?retryWrites=true&w=majority';

//crear funcion asincrona para guardar el cliente, recibiendo como parametro un objeto con propiedades de dicho cliente
async function agregarCliente(clienteNuevo){

    //se instancia conexion a mongodb con las credenciales anterior mencionadas
    const client = new MongoClient(uri);

    //se crea try/catch/finally para hacer seguimiento de la funcion agregarCliente
    try {

        //se realiza conexion con await para garantizar que se conecte primero antes de realizar otra operacion
        await client.connect();

        //se realiza el guardado del cliente y se guarda el resultado del query en una variable
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

//crear funcion asincrona para guardar la obra, recibiendo como parametro un objeto con propiedades de dicha obra
async function agregarObra(obraNueva){

    //se instancia conexion a mongodb con las credenciales anterior mencionadas
    const client = new MongoClient(uri);

    //se crea try/catch/finally para hacer seguimiento de la funcion agregarObra
    try {

        //se realiza conexion con await para garantizar que se conecte primero antes de realizar otra operacion
        await client.connect();

        //se realiza el guardado de la obra y se guarda el resultado del query en una variable
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

//crear funcion asincrona para guardar el empleado, recibiendo como parametro un objeto con propiedades de dicho empleado
async function agregarEmpleado(empleadoNuevo){

    //se instancia conexion a mongodb con las credenciales anterior mencionadas
    const client = new MongoClient(uri);

    //se crea try/catch/finally para hacer seguimiento de la funcion agregarEmpleado
    try {

        //se realiza conexion con await para garantizar que se conecte primero antes de realizar otra operacion
        await client.connect();

        //se realiza el guardado del empleado y se guarda el resultado del query en una variable
        const result = await client.db('construtech').collection('empleados').insertMany(empleadoNuevo);

        //se crea mensaje de guardado exitoso
        console.log(`Empleados agregados con exito`);
    } catch (error) {

        //se crea mensaje de error en caso de que falle la conexion o el guardado del cliente
        console.log(error);
    
    }

}

async function setIdEmpleados(){
    //se instancia conexion a mongodb con las credenciales anterior mencionadas
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const projection = {_id: 1};
        const total_docs = client.db('construtech').collection('empleados').countDocuments();
        const cursor = client.db('construtech').collection('empleados').find().project(projection);
        for await (const doc of cursor) {
            console.log(doc._id)

            client.db('construtech').collection('obras').updateOne({"idEmpl":""},{$set:{"idEmpl":doc._id}})
            
        }
        console.log( await total_docs)
    } catch (error) {
        console.log(error)
    }
}


async function setIdClientes(){
    //se instancia conexion a mongodb con las credenciales anterior mencionadas
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const projection = {_id: 1};
        const total_docs = client.db('construtech').collection('clientes').countDocuments();
        const result = client.db('construtech').collection('clientes').find().project(projection);
        for await (const doc of result) {
            console.log(doc._id)

            client.db('construtech').collection('obras').updateOne({"idCli":""},{$set:{"idCli":doc._id}})
            
        }
        console.log( await total_docs)
    } catch (error) {
        console.log(error)
    }
}

//setIdEmpleados();

//setIdClientes();



module.exports ={
    agregarObra,
    agregarCliente,
    agregarEmpleado
}
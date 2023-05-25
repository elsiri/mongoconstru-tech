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
        const result = await client.db('construtech').collection('clientes').insertOne(clienteNuevo);

        //se crea mensaje de guardado exitoso
        console.log(`Se creo un cliente con el id _id: ${result.insertedId}`);
    
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
        console.log(`Se creo una obra con el id _id: ${result.insertedId}`);
    
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
        console.log(`Se creo un empleado con el id _id: ${result.insertedId}`);
    
    } catch (error) {

        //se crea mensaje de error en caso de que falle la conexion o el guardado del cliente
        console.log(error);
    
    } finally {
        
        //se cierra la conexion con base de datos por seguridad
        await client.close();
    
    }

}

//crear funcion asincrona para mostrar los clientes guardados
async function showClientes() {
        //se instancia conexion a mongodb con las credenciales anterior mencionadas
    const client = new MongoClient(uri);
    //se crea try/catch/finally para hacer seguimiento de la funcion shoClientes
    try {
        //se realiza conexion con await para garantizar que se conecte primero antes de realizar otra operacion
        await client.connect();

        //se realiza query para mostrar todos los empleados y se guarda en variable result
        const result = await client.db('construtech').collection('clientes').find({});

        //se valida si la variable tiene algun valor para mostrar
        if (result) {
            //se imprime por consola el resultado del query
            console.log(result);        
        } else {
            //se crea mensaje de error en caso de no encontrar ningun cliente
            console.log("No se pudieron encontrar los clientes")
        }
    } catch (error) {
        //se crea mensaje de error en caso de que falle la conexion o el query para mostrar clientes
        console.log(error);
    }finally{
        //se cierra la conexion con base de datos por seguridad
        await client.close();
    }    
}

//se exporta funcion agregarCliente para ser utilizada en otros archivos
module.exports ={
    agregarCliente,
    agregarObra,
    agregarEmpleado,
    showClientes
}
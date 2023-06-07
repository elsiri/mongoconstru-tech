//Paso 1
/*-------------------------------------*/
//exportacion de libreria mongodb
const { MongoClient } = require('mongodb');
//credenciales de accesso a cluster de mongodb
const uri = 'mongodb+srv://kevincastrillon31:admin123@clusterkevin.lmjqevf.mongodb.net/?retryWrites=true&w=majority';
/*-------------------------------------*/
//Fin paso 1

//Paso 2 funciones curd para agregar/actualizar/eliminar documentos en las colecciones de clientes, empleados y obras
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

//crear funcion asincrona para obtener cliente, recibiendo como parametro un objeto con las propiedades que se requieran buscar las coincidencias
async function buscarCliente(busqueda){

    //se instancia conexion a mongodb con las credenciales 
    const client = new MongoClient(uri);

    //se crea try/catch/finally para hacer seguimiento de la funcion buscarCliente
    try {

        //se realiza conexion con await para garantizar que se conecte primero antes de realizar otra operacion
        await client.connect();

        //se realiza la busqueda de los clientes y se guarda el resultado del query en una variable
        const result = await client.db('construtech').collection('clientes').find(busqueda).toArray();

        //se crea mensaje de busqueda exitosa, se debe parsear el regultado a string ya que result es un objeto
        console.log(`Clientes encontrados ${JSON.stringify(result)}, con el criterio de busqueda ${JSON.stringify(busqueda)}`);
    
    } catch (error) {

        //se crea mensaje de error en caso de que falle la conexion o el guardado del cliente
        console.log(error);
    
    } finally {

        //se cierra la conexion con base de datos por seguridad
        await client.close();
    
    }

}

//crear funcion asincrona para actualizar cliente, recibiendo 2 parametros, el primero es la condicion que se debe cumplir para realizar la actualizacion y la actualizacion que seria un objeto el $set y las propiedades del cliente que se requieren actualizar
async function actualizarCliente(condicion, actualizacion){

    //se instancia conexion a mongodb con las credenciales
    const client = new MongoClient(uri);

    //se crea try/catch/finally para hacer seguimiento de la funcion actualizarCliente
    try {

        //se realiza conexion con await para garantizar que se conecte primero antes de realizar otra operacion
        await client.connect();

        //se realiza la actualizacion del cliente y se guarda el resultado del query en una variable
        const result = await client.db('construtech').collection('clientes').updateOne(condicion,actualizacion);

        //se crea mensaje de actualizacion exitosa
        console.log(`El cliente con criterio de actualizacion ${JSON.stringify(condicion)} fue actualizado con exito`);
    
    } catch (error) {

        //se crea mensaje de error en caso de que falle la conexion o el guardado del cliente
        console.log(error);
    
    } finally {

        //se cierra la conexion con base de datos por seguridad
        await client.close();
    
    }

}

//crear funcion asincrona para eliminar cliente, recibiendo 1 parametro que es la condicion que se debe cumplir para eliminar el cliente
async function eliminarCliente(condicion){

    //se instancia conexion a mongodb con las credenciales
    const client = new MongoClient(uri);

    //se crea try/catch/finally para hacer seguimiento de la funcion eliminarCliente
    try {

        //se realiza conexion con await para garantizar que se conecte primero antes de realizar otra operacion
        await client.connect();

        //se realiza la elimiacion del cliente y se guarda el resultado del query en una variable
        const result = await client.db('construtech').collection('clientes').deleteOne(condicion);

        //se crea if con validacion, se valida si hubo al menos una eliminacion y si hay una respuesta true, luego se crea mensaje de eliminado exitoso o de error
        if (result.acknowledged == true && result.deletedCount >= 1) {
            console.log(`El cliente con criterio de busqueda ${JSON.stringify(condicion)} fue eliminado con exito`);            
        } else {
            console.log("Error al intentar eliminar cliente con criterio de busqueda "+JSON.stringify(condicion))
        }

    
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

//crear funcion asincrona para obtener empleado, recibiendo como parametro un objeto con las propiedades que se requieran buscar las coincidencias
async function buscarEmpleado(busqueda){

    //se instancia conexion a mongodb con las credenciales 
    const client = new MongoClient(uri);

    //se crea try/catch/finally para hacer seguimiento de la funcion buscarEmpleado
    try {

        //se realiza conexion con await para garantizar que se conecte primero antes de realizar otra operacion
        await client.connect();

        //se realiza la busqueda de los empleados y se guarda el resultado del query en una variable
        const result = await client.db('construtech').collection('empleados').find(busqueda).toArray();

        //se crea mensaje de busqueda exitosa, se debe parsear el regultado a string ya que result es un objeto
        console.log(`empleados encontrados ${JSON.stringify(result)}, con el criterio de busqueda ${JSON.stringify(busqueda)}`);
    
    } catch (error) {

        //se crea mensaje de error en caso de que falle la conexion o el guardado del empleado
        console.log(error);
    
    } finally {

        //se cierra la conexion con base de datos por seguridad
        await client.close();
    
    }

}

//crear funcion asincrona para actualizar empleado, recibiendo 2 parametros, el primero es la condicion que se debe cumplir para realizar la actualizacion y la actualizacion que seria un objeto el $set y las propiedades del empleado que se requieren actualizar
async function actualizarEmpleado(condicion, actualizacion){

    //se instancia conexion a mongodb con las credenciales
    const client = new MongoClient(uri);

    //se crea try/catch/finally para hacer seguimiento de la funcion actualizarEmpleado
    try {

        //se realiza conexion con await para garantizar que se conecte primero antes de realizar otra operacion
        await client.connect();

        //se realiza la actualizacion del empleado y se guarda el resultado del query en una variable
        const result = await client.db('construtech').collection('empleados').updateOne(condicion,actualizacion);

        //se crea mensaje de actualizacion exitosa
        console.log(`El empleado con criterio de actualizacion ${JSON.stringify(condicion)} fue actualizado con exito`);
    
    } catch (error) {

        //se crea mensaje de error en caso de que falle la conexion o el guardado del empleado
        console.log(error);
    
    } finally {

        //se cierra la conexion con base de datos por seguridad
        await client.close();
    
    }

}

//crear funcion asincrona para eliminar empleado, recibiendo 1 parametro que es la condicion que se debe cumplir para eliminar el empleado
async function eliminarEmpleado(condicion){

    //se instancia conexion a mongodb con las credenciales
    const client = new MongoClient(uri);

    //se crea try/catch/finally para hacer seguimiento de la funcion eliminarEmpleado
    try {

        //se realiza conexion con await para garantizar que se conecte primero antes de realizar otra operacion
        await client.connect();

        //se realiza la elimiacion del empleado y se guarda el resultado del query en una variable
        const result = await client.db('construtech').collection('empleados').deleteOne(condicion);

        //se crea if con validacion, se valida si hubo al menos una eliminacion y si hay una respuesta true, luego se crea mensaje de eliminado exitoso o de error
        if (result.acknowledged == true && result.deletedCount >= 1) {
            console.log(`El empleado con criterio de busqueda ${JSON.stringify(condicion)} fue eliminado con exito`);            
        } else {
            console.log("Error al intentar eliminar empleado con criterio de busqueda "+JSON.stringify(condicion))
        }

    
    } catch (error) {

        //se crea mensaje de error en caso de que falle la conexion o el guardado del empleado
        console.log(error);
    
    } finally {

        //se cierra la conexion con base de datos por seguridad
        await client.close();
    
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
    buscarCliente,
    actualizarCliente,
    eliminarCliente,
    agregarEmpleado,
    buscarEmpleado,
    actualizarEmpleado,
    eliminarEmpleado,
    setIdClientes,
    setIdEmpleados
}
/*-------------------------------------*/
//Fin paso 4
//NOTA: Seguir los pasos del archivo index.js para poblar las diferentes colecciones, asignar empleados y clientes a obras
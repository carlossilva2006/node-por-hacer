
const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);//esto convierte la informacion por hacer en formato json

    fs.writeFile('db/data.json', data,(error) =>{
        if (error) throw error;
        // console.log('el archivo a sido creado');
    });
}
//leer json

const cargarDB = () => {
    try {

        listadoPorHacer = require('../db/data.json');  //esto lo convierte en javascript
        //cargar lo debemos manejar con try catch por si esta vacio entonces pase esto y no tire error
    } catch (error) {
    listadoPorHacer = [];        
    }
    
}

const crear = (descripcion) => {

   // cargarDB(); //deberiamos poder ver el listado por hacer
    // lo que se debe hacer para que el crear siempre me este agregando es cargar la BD 

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push( porHacer );
    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

// debe recibir dos argumentos la descripcion y el completado
const actualizar = (descripcion, completado = true) => {
//primero cargar la BD
//buscar en el arreglo la descripcion que coincida
cargarDB();
                // se omite el return al ser una linea
let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion)

    if ( index >= 0) { //cero se la posicion valida
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();     //regresa
    let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion);
  // si estos tienen el mismo largo no se borro ninguno
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;  //si es false entonces si lo borro
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}





// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

// console.log(argv);

let comamdo = argv._[0];

switch (comamdo) {

    case 'crear':           //recibe como argumento esto y se almacena en tarea
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':
        let listado = porHacer.getListado();
        for(let tarea of listado){
            console.log('========Por Hacer========='.blue);
            console.log('=='.blue,tarea.descripcion,'              =='.blue);
            console.log('=='.blue,'Estado: ',tarea.completado,'      =='.blue);
            console.log('=========================='.blue);
        }
    break;
    
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion, argv.completado);
        console.log(borrado);
    break;
    
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
    break;

    default:
    console.log('comando no es reconocido'); 
}
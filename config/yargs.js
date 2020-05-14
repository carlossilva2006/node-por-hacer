const descripcion = {
    demand: true,
    alias: 'c',
    desc: 'Descripcion de la tarea'
};

const completado = {
    default: true,
    alias:'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
            .command('crear', 'crea un elemento por hacer',{
                 descripcion
            })
            .command('actualizar','actualiza el estado completado de una tarea',{
                descripcion,
                completado
            })
            .command('borrar','borra una tarea',{
                descripcion
            })
            .help()
            .argv;

module.exports = {
        
    argv
}

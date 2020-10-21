const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por borrar'
};

const completado = {
    default: true,
    alias: 'c'
};

const argv = require('yargs')
    .command('listar', 'Muestra todas las tareas por hacer', {})
    .command('crear', 'Crea una nueva tarea', { descripcion })
    .command('actualizar', 'Actualiza una tarea por hacer', { descripcion, completado })
    .command('borrar', 'Borra una tarea', { descripcion })
    .help()
    .argv

module.exports = {
    argv
}
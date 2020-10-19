const nombreConstante = require('yargs')
    .command('nombreComando', 'Descripcion del comando', {
        parametro1: {
            demand: true, //parametro que se debe introducir
            alias: 'a'
        },
        parametro2: {
            alias: 'l',
            dafault: 10 //parametro con valor por defecto
        }
    })
    .help() //MÉTODO HELP
    .argv;
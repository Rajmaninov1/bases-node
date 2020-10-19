const { tablaMultiplicar } = require('./multiplicar');

let base = 2;

tablaMultiplicar(base, 10)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(err => console.log(err))
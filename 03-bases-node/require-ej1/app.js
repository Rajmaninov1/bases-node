const fs = require('fs');

let base = 2;

let tablaMultiplicar = (base, n) => {
    let data = '';
    for (let i = 1; i <= n; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }
    return data;
}

fs.writeFile(`tablasMultiplicar/tablaMultiplicar${base}.txt`, tablaMultiplicar(base, 10), (err) => {
    if (err) throw err;

    console.log(`El archivo tablaMultiplicar${base}.txt ha sido creado con éxito.`);
})
const fs = require('fs');
const colors = require('colors');

let tablaMultiplicar = (base, n) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= n; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablasMultiplicar/tablaMultiplicar${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tablaMultiplicar${base}.txt`.green)
        });

    });
}

module.exports = {
    tablaMultiplicar
}
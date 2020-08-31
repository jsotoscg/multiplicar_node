const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');
const { isNumber } = require('util');

let listar = (base, max) => {
    for (let i = 0; i <= max; i++) {
        console.log(`El resultado de ${base} * ${i} = ${base * i}`.green);
    }
}

let crearArchivo = (base, max) => {
    console.log(`Base: ${base} :: Max ${max}`);

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El parámetro ${base} no es numérico...`)
            return;
        }

        let data = '';

        for (let a = 1; a <= max; a++) {
            data += `${base} * ${a} = ${base * a} \n`
        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listar
}
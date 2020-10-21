const fs = require('fs');

let listadoPorHacer = [];

const saveDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const loadDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }
}

const actualizar = (descripcion, completado = true) => {
    loadDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const crear = (descripcion) => {

    loadDB();

    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    saveDB();
    return porHacer;
}

const borrado = (descripcion) => {
    loadDB();
    let nuevaLista = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length === nuevaLista.length) {
        return false;
    } else {
        listadoPorHacer = nuevaLista;
        saveDB();
        return true;
    }
}

const getListado = () => {
    loadDB();
    return listadoPorHacer;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrado
}
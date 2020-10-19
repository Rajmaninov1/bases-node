let empleados = [{
    id: 1,
    nombre: 'Julian'
}, {
    id: 2,
    nombre: 'Laura'
}, {
    id: 3,
    nombre: 'David'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find((empleado) => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

getEmpleado(20).then(empleado => {
    console.log('Empleado de DB:', empleado);
}, (err) => {
    console.log(err);
});

getEmpleado(2).then(empleado => {
    console.log('Empleado de DB:', empleado);
}, (err) => {
    console.log(err);
});


let getSalario = (id) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find((salario) => salario.id === id);
        let empleadoDB = empleados.find((empleado) => empleado.id === id);

        if (!salarioDB) {
            if (empleadoDB) {
                reject(`No se encontró un salario para el usuario ${empleadoDB.nombre}`);
            } else {
                reject(`No existe un empleado con el ID ${id}`);
            }
        } else {
            resolve(`El salario de ${empleadoDB.nombre} es $${salarioDB.salario}`);
        }
    });
}

getSalario(1).then(salario => {
    console.log('Salario de DB:', salario);
}, (err) => {
    console.log(err);
});

getSalario(3).then(salario => {
    console.log('Salario de DB:', salario);
}, (err) => {
    console.log(err);
});

getSalario(10).then(salario => {
    console.log('Salario de DB:', salario);
}, (err) => {
    console.log(err);
});
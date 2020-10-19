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

let getSalario = (id, callback) => {
    let salarioDB = salarios.find((salario) => salario.id === id);
    let empleadoDB = empleados.find((empleado) => empleado.id === id);
    if (!salarioDB) {
        if (empleadoDB) {
            callback(`No se encontró un salario para el usuario ${empleadoDB.nombre}`);
        } else {
            callback(`No existe un empleado con el ID ${id}`);
        }
    } else {
        callback(null, `El salario de ${empleadoDB.nombre} es $${salarioDB.salario}`);
    }
}

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find((empleado) => empleado.id === id)

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

getEmpleado(10, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});

getSalario(3, (err, salario) => {
    if (err) {
        return console.log(err);
    }
    console.log(salario);
});

getSalario(10, (err, salario) => {
    if (err) {
        return console.log(err);
    }
    console.log(salario);
});

getSalario(1, (err, salario) => {
    if (err) {
        return console.log(err);
    }
    console.log(salario);
});
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

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find((empleado) => empleado.id === id)

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async(id) => {

    let salarioDB = salarios.find((salario) => salario.id === id);
    let empleadoDB = empleados.find((empleado) => empleado.id === id);

    if (!salarioDB) {
        if (empleadoDB) {
            throw new Error(`No se encontró un salario para el usuario ${empleadoDB.nombre}`);
        } else {
            throw new Error(`No existe un empleado con el ID ${id}`);
        }
    } else {
        return `El salario de ${empleadoDB.nombre} es $${salarioDB.salario}`;
    }
}

let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(id);
    console.log(resp);
}

getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));
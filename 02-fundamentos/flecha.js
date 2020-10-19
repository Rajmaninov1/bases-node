function sumar(a, b) { //Tradicional
    return a + b;
}

console.log(`Tradicional: ${sumar(10, 20)}`);

let suma = (a, b) => { //Flecha
    return a + b;
}

console.log(`Flecha: ${suma(10, 20)}`);

let saludar = () => 'Hola mundo';
console.log(saludar());
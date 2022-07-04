//Usando Rest Operator

//La "Forma declarativa", también se modifica el array, pero no modifica la variable, sino que crea una nueva. Está relacionada con la programación funcional.

const carrito = [];

const producto1 = {
    nombre: 'Monitor',
    precio: 400
}

const producto2 = {
    nombre:'Móvil',
    precio: 500
}

const producto3 = {
    nombre:'Teclado',
    precio: 50
}

let resultado;

resultado = [...carrito, producto1];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado ];


console.table(resultado);
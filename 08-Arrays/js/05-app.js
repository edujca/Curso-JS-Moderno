// const meses = ["enero", 'febrero','marzo'];

// //console.log(meses);

// //Métodos del array

// console.table(meses);

// //Agregar al final del array

// meses.push('abril');
// console.table(meses);


const carrito = [];

//Definir un producto
const producto1 = {
    nombre: 'Monitor',
    precio: 400
}

const producto2 = {
    nombre:'Móvil',
    precio: 500
}

carrito.push(producto1, producto2); //.push inserta el producto

const producto3 = {
    nombre:'Teclado',
    precio: 50
}

carrito.unshift(producto3); //.unshift añade al principio del array

console.table(carrito);

//A estos métodos se los conoce como "Forma imperativa", ya que modifica la variable original
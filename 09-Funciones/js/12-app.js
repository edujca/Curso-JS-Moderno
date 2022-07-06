//Arrow Functions con forEach y map

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisor', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audífonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},

]

const nuevoArray1 = carrito.forEach( producto => {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
} )

const nuevoArray2 = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`)

console.log(nuevoArray1);
console.log(nuevoArray2);
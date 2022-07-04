//Métodos para arrays
//map

//La diferencia entre map y forEach es que map crea un nuevo array y forEach no

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisor', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audífonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},

]

carrito.map( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
} )
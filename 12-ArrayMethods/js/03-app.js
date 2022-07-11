//.reduce
//Función reductora: toma una gran cantidad de datos, los une y entrega el resultado

const carrito = [ //objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
//se pone primero el valor anterior (total), luego, el valor que se suma (precio) y, finalmente, el valor con el que comienza (0)
console.log(resultado);
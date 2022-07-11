const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']; //índices

const carrito = [ //objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si un valor existe en un array

meses.forEach((mes) => {
    console.log(mes);
});

//.includes funciona con valores basados en un índice. Devuelve true o false
const resultado = meses.includes("Enero");
console.log(resultado);

//.some se usa con valores basados en un objeto. Devuelve true o false

const existe = carrito.some( producto => {
    return producto.nombre === 'Celular';
} )

console.log(existe);

//.some en un array de índice

const existe2 = meses.some( mes => mes === "Febrero");
console.log(existe2);
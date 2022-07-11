//usos del rest o spread operator

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']; //índices

const carrito = [ //objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//no modifica el array original --> programación funcional
//.push si modifica el array original
const meses2 = [...'Septiembre', ...meses, 'Agosto'];
console.log(meses2);

const programación = { nombre: 'HDD', precio: 300};
const carrito2 = [...carrito, programación];
console.log(carrito2);
//findIndex para encontrar la posición en un array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']; //índices

const carrito = [ //objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Encontrar el índice de abril

const indice = meses.findIndex( mes => mes ==="Abril");
console.log(`El índice es ${indice}`);

const indice2 = meses.findIndex( mes => mes ==="Diciembre");
console.log(`El índice es ${indice2}`); //como no existe, devuelve -1

//Encontrar un índice de un array de objeto. Pero solamente devuelve el índice del primer objeto que encuentra

const cacharros = carrito.findIndex( cacharro => cacharro.nombre === 'Tablet');
console.log(`El índice es ${cacharros}`);

//forEach Y .map
//Estos iteradores se usan más en JS que for y while
//la diferencia es que map crea un nuevo array

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

// pendientes.forEach( (pendiente) => {
//     console.log(pendiente);
// })
pendientes.forEach( pendiente => console.log(pendiente));

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
})

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisor', precio: 100},
    { nombre: 'Tablet', precio: 200, descuento:true},
    { nombre: 'Audífonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},

]

carrito.forEach(carrito => console.log (carrito.nombre));

carrito.map(carrito => console.log (carrito.nombre));
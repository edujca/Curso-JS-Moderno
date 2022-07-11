//for...of

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisor', precio: 100},
    { nombre: 'Tablet', precio: 200, descuento:true},
    { nombre: 'Audífonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},

]

for(let pendiente of pendientes){ //habría que dar un nombre a cada iteración --> le damos un alias a cada elemento de pendiente
    console.log(pendiente);
}

for (let producto of carrito){
    console.log(producto.nombre);

}
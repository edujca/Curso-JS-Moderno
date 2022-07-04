//Eliminar con modo imperativo

const carrito = [];

//Definir un producto
const producto1 = {
    nombre: 'Monitor',
    precio: 400
}

const producto4 = {
    nombre: 'Televisor',
    precio: 600
}

carrito.push(producto4);
carrito.push(producto1); //.push inserta el producto


const producto3 = {
    nombre:'Teclado',
    precio: 50
}

carrito.unshift(producto3); //.unshift añade al principio del array

console.table(carrito);

//Eliminar el último elemento del array

carrito.pop();

console.table(carrito);

carrito.push(producto4);
carrito.push(producto1); 

//Eliminar del inicio del array

carrito.shift();

console.table(carrito);

carrito.push(producto4);
carrito.push(producto3); 

//Elininar de una posición determinada. Slice tiene dos parámetros, dónde comienza y cuántos elementos elimina

carrito.splice(1,1);

console.table(carrito);

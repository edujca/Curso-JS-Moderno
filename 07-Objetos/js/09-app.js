"use strict";

const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 300,
    disponible: true,

}
console.log(producto.disponible);

Object.seal( producto ); //me permite cambiar llaves, pero no añadir ni eliminar

console.log(Object.isSealed(producto)); //para averiguar si un objeto está sellado

producto.disponible = false;

console.log(producto.disponible);
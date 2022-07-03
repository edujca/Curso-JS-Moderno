"use strict";

const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 300,
    disponible: true,

}

const   medidas={
    peso: '1 kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

//assign

const resultado = Object.assign(producto, medidas) //une varios objetos en uno
console.log(resultado);

//Spread Operator y Rest Operator. Son tres puntos (...). Más usado.
const resultado2 = { ...producto, ...medidas};

console.log(resultado2);
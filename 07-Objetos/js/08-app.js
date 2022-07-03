"use strict";

const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 300,
    disponible: true,

}
console.log(producto.disponible);

Object.freeze( producto ); //hace que funcione como Const

console.log(Object.isFrozen(producto)); //esto nos indica si el objeto está congelado o no


//Aquí estamos modificando el objeto

producto.disponible = false;

console.log(producto.disponible);

//Hacer que el objetose comporte como una constante, es decir, que no pueda ser modificado

//Se hace añadiendo "use strict" al inicio del archivo

console.log(producto);

console.log(producto.precio);

x =20;

console.log(x); //con "use strict" no acepta esto, por lo que dará error

/*Con "use strict" aparecen Object Methods

Al utilizar Object.freeze( nombreObjeto ) impide que se pueda modificar.

*/

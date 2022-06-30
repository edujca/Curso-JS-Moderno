//Unir variables

const producto = 'Monitor de 20 pulgadas ';
const precio = '30 euros';

console.log(producto.concat(precio));
console.log(producto.concat("En oferta"));
console.log(producto + "con un precio de " + precio);
console.log(producto, "con un precio de ", precio);

//ECMA 6 trae template strings backtip

console.log(`El producto ${producto} tiene un precio de ${precio}`);

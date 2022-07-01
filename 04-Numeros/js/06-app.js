const n1 = "20";
const n2 = "20.2";
const n3 = "Uno";
const n4 = 20;
const n5 = 20.2;


console.log(n1); //en negro

console.log(Number.parseInt(n1)); //en azul

console.log(Number.parseInt(n2)); //convierte el string decimal en número entero

console.log(Number.parseFloat(n2)); //convierte el string decimal en número decimal

console.log(Number.parseInt(n3)); //devuelve NaN

//isInteger devuelve si es un número entero o no

console.log(Number.isInteger(n4));//true

console.log(Number.isInteger(n5));//false


const b1 = true;
const b2 = false;
const b3 = "true";
const b4 = new Boolean(true);

console.log(b1);

console.log(b2);

console.log(b1 == b2);

console.log(b1 == b3); //false

console.log(typeof b1); //boolean
console.log(typeof b4); //object

/*
Consejos para comparar booleans:

Si es true, es implícito, por lo que, al escribir un if, NO poner ==

Operador ternario:

autenticado ? "Sí" : "No";
*/

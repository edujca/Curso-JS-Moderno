const producto = 'Monitor de 20 pulgadas';

//.repeat permite repetir una cadena de texto
//si se pasa un número decimal, redondea y repite esa cantidad de veces

const texto = 'en promoción '.repeat(3);

console.log(texto);
console.log(`${producto} ${texto}!!!!`)


//Split --> dividir un stirng

const actividad = "Estoy aprendiendo JS moderno";
console.log(actividad.split(" "));

const hobbies = "Leer, caminar, cantar, dormir";
console.log(hobbies.split(", "));
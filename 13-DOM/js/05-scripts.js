//querySelectorAll
//para seleccionar todos los elemntos de clases o etiquetas html

//A cada elemento que devuelve se le llama nodo

const cards = document.querySelectorAll('div.card'); //devuelve un NodeList
console.log(cards);

//Podría servirnos para ver si estamos poniendo más de un id con el mismo nombre

//Si no existe

const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste); //devuelve un NodeList vacío
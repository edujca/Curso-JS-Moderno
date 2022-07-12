//querySelector
//devuelve máximo un elemento, pero me permite seleccionar también clases

const card = document.querySelector('.card'); //al ser una clase, con punto
console.log(card);

//Podemos tener selectores específicos como en css
const info = document.querySelector('.premium .info');
console.log(info);

//Seleccionar el segundo card de hospedaje
//podemos mezclar html y clases
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//Seleccionar id
//Si hay más de uno, seleccionará el primero
const formulario = document.querySelector('#formulario');
console.log(formulario);

//Poemos seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);

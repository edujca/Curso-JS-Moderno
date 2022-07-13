//Traversing the DOM
//children
//firstElementChild y lastElementChild
//parentNode y parentElement
//nextElementSibling y previousElementSibling
//Forma de moverse entre los elementos


const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes); //los espacios en blanco son considerados elementos (por ejemplo, se convierten en text)
console.log(navegacion.children); //trae solamente los elementos HTML reales

console.log(navegacion.children[0]); //podemos acceder como si fuera un array

console.log(navegacion.children[1].nodeName); //A
console.log(navegacion.children[0].nodeType); //1 (ver documentación de Mozilla de Js nodeType)

const card = document.querySelector('.card');
console.log(card.children[1].children[1].textContent)

card.children[1].children[1].textContent = "nuevo heading desde traversing the dom";

console.log(card.children[0]);
card.children[0].src = 'img/hacer3.jpg';

//Traversing desde el children al padre

console.log(card.parentNode);
console.log(card.parentElement); //más seguro

console.log(card.parentElement.parentElement.parentElement);

console.log(card.nextElementSibling); //siguiente elemento hermano
console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling); //elemento hermano previo 
console.log(ultimoCard.previousElementSibling.previousElementSibling); 

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

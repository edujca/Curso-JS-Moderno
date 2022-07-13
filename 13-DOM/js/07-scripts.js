//Cambiando el css con Js
/*
Una diferencia de estilos entre css y JS es que en lugar de guiones, la segunda palabra se inicia con mayúsculas:
background-color --> backgroundColor
*/

const encabezado = document.querySelector('h1');

console.log(encabezado.style);

encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

/* Es más recomendable quitar o agregar clases, ya que los estilos son cosa del css*/

const card = document.querySelector('.card');
console.log(card.classList);
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card');
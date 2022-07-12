//Modificar texto o imágenes con JS

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText); //devuelve el texto, pero no encuentra texto oculto (visibility:hidden)
console.log(encabezado.textContent); //devuelve el texto, aunque esté oculto
console.log(encabezado.innerHTML); //devuelve el texto y las etiquetas

//También podemos encadenar o aplicar el chainning

const encabezado2 = document.querySelector('.contenido-hero h1').textContent; 
console.log(encabezado2);

//Lo siguiente modificaría el texto del encabezado

//document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';

//o mejor:

const nuevoHeading = 'nuevo heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

//En Firefox Developer Edition, en la consola aparecen todos los métodos que podemos aplicar en cada selector

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';
console.log(imagen);
//Crear HTML con JS
//createElement('etiquetaHTML'); puede ser en mayúsculas o minúsculas
//appendChild --> agrega un nuevo hijo al final de los hijos
//insertBefore(elemento, posición o nodo de referencia(obligatorio)) --> da más control de dónde se inserta el elemento

const enlace = document.createElement('A');
enlace.textContent = 'nuevo-enlace';

enlace.href = '/nuevo-enlace';

enlace.target = '_blank';

enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('nueva-clase');

enlace.onclick = miFuncion;

console.log(enlace);

/*
Una vez creado el elemento, hay que definir dónde mostrarlo
*/

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace);
navegacion.insertBefore(enlace, navegacion.children[1]);


function miFuncion() {alert('diste click')}

/***************************************/

//Crear un card de forma dinámica

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');


const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');



const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//crear div con clase info

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto alternativo';

//Crear el CARD

const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);

//Asignar info
card.appendChild(info);

console.log(card);

//Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);
contenedor.insertBefore(card, contenedor.children[0]);

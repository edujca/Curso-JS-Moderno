/*
Toda la web está en el objeto document, que es lo que se usa para seleccionar cualquier objeto.

*/

let elemento;

elemento = document;
elemento = document.all; //muestra todas las etiquetas que se están usando

//Estos métodos devuelven un HTMLCollection, que equivale a un array
elemento = document.head;
elemento = document.body;
elemento = document.domain; //url
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

elemento = document.links //en consola lista todos los enlaces que hay en la página
elemento = document.links[4];
elemento = document.links[4].classList; //devuelve un array con las clases
elemento = document.links[4].className; //devuelve el string con las clases que tenga

elemento = document.images; //lista de imágenes
elemento = document.scripts; //lista de scripts







console.log(elemento);
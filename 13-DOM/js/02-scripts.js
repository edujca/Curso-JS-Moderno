//getElementsByClassNames
//Seleccionar elementos por su clase. Cada vez en mayor desuso.

const header = document.getElementsByClassName('header');

console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//si las clases se repiten:

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//si una clase no existe, devuelve un HTMLCollection vacío

const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);
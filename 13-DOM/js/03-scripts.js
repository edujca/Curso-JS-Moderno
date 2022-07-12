//getElementById
//Seleccionar elementos por su id. En caso de que haya más de uno solamente devuelve el primer elemento que encuentre. También se utiliza muy poco

const formulario = document.getElementById('formulario');
console.log(formulario);

const noExiste = document.getElementById('no-existe'); //devuelve null
console.log(noExiste);


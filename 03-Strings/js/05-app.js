const producto = 'Monitor de 20 pulgadas';

//.replace para reemplazar
console.log(producto);
console.log(producto.replace('pulgadas', '"'));

//.slice para cortar
console.log(producto.slice(0,10)); //desde hasta
console.log(producto.slice(8)); //desde hasta el final


//.substring alternativa a .slice

console.log(producto.substring(0,10));

//La diferencia entre .slice y .substring es que para el siguiente código, .slice no hace nada, y .substring alterna los valores

console.log(producto.slice(3,1));
console.log(producto.substring(3,1));

//charAt también hace algo parecido

const usuario = "Marilyn";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0,1));


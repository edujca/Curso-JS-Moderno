const producto = '           Monitor de 20 pulgadas                  ';
const precio = '30 euros';

console.log(producto);
console.log(producto.length);

//Eliminar espacios en blanco del inicio
//Para validar formularios
console.log(producto.trimStart());
console.log(producto.trimEnd());

//Encadenar ambos métodos.
console.log(producto.trimStart().trimEnd());
console.log(producto.length);
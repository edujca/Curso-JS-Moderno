const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 300,
    disponible: true,

}

console.log(producto.nombre);

//creamos una variable con ese dato

//const precio = producto.precio;

//console.log(precio);

//creamos la variable en un solo paso. Se llama Destructuring (sacar de una estructura)

const { disponible } = producto;

console.log(disponible);

//Podemos extraer varios valores de una vez

const { precio, nombre } = producto;

console.log(precio);
console.log(nombre);


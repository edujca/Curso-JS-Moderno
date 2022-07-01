const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 300,
    disponible: true,

}

console.log(producto);

//Agregar más propiedades al objeto

producto.imagen = 'imagen.jpg'; //se hace con punto y al estar fuera se usa =

console.log(producto);

//Eliminar propiedades del objeto

delete producto.disponible;

console.log(producto);

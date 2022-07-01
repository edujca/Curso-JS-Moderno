//En los objeto sí se pueden reasignar las variables. También borrar. Por eso hay que congelarlos.

const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 300,
    disponible: true,

}

producto.disponible = false;

console.log(producto);

console.log(producto.precio);
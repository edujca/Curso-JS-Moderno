//El Object Literal. Construimos cada objeto

const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 300,
    disponible: true,
   
}


//Con el Object constructor podemos automatizar la creación de objetos cuando tenemos que hacerlo con varios. Se usa menos que el anterior. Además, ahora se usan clases

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 24 pulgadas', 500);

console.log(producto2);

const producto3 = new Producto('Televisor', 300);

console.log(producto3);


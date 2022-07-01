//Objetos dentro de objetos

const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg.',
            medida: '1m.'
        }, //no olvidar esta coma
        fabricacion:{
            pais: 'China'
        }
    }

}

console.log(producto);

console.log(producto.informacion.fabricacion.pais);
console.log(producto.informacion.medidas.peso);
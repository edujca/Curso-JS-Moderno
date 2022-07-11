//.find
//crea un array basado en la condición que se está revisando. Extrae los datos y crea un nuevo objeto con ellos
//En caso de haber más de una condición igual, solamente crea un array con la primera de ellas

const carrito = [ //objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//con forEach

let resultado = '';
carrito.forEach((producto, i) => {
    if(producto.nombre === 'Tablet'){
        resultado = carrito[i];
    }
});
console.log(resultado);

//con .find

const resultado2 = carrito.find( producto => producto.nombre === 'Tablet');
console.log(resultado2);

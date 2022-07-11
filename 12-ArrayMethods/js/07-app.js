//.concat
//sirve para unir varios arrays en uno
//Es importante el orden

const carrito = [ //objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const meses = ['Enero', 'Febrero', 'Marzo'];

const meses2 = ['Abril', 'Mayo', 'Junio', 'Julio'];

const meses3 = ['Agosto', 'Septiembre']

const resultado = meses.concat(meses2, meses3, 'Octubre'); //puedes concatenar todos los valores que se quieran
console.log(resultado);

//spread operator

const resultado2 = [...meses, ...meses2, ...meses3, 'Octubre'];
console.log(resultado2);



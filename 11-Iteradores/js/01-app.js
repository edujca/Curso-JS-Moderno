//For loop
//El código se ejecuta hasta que una condición se cumpla o se deje de cumplir

// for (let i=0; i <= 10 ; i+=2){
//     console.log(`Número ${i}`);
// }

//¿Cómo identificar los pares y los nones?

// for(let i = 0; i<=20; i++ ){
//     if(i % 2 === 0){
//         console.log(`El número ${i} es par`);
//     }else{
//         console.log(`El número ${i} es impar`);
//     }
// }

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisor', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audífonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},

]

console.log( carrito.length );

for (let i = 0; i<carrito.length; i++){
    console.log(carrito[i].nombre);
}
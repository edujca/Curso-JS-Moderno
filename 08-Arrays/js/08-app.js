const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 300,
    disponible: true,

}

//creamos la variable en un solo paso. Se llama Destructuring (sacar de una estructura)

const { nombre } = producto;

console.log(nombre);

//Destructuring con arrays

const numeros = [10,20,30,40,50];

//const [ primero, segundo, tercero ] = numeros;

//Si sólo quisiera el tercero:
const [ , , tercero] = numeros;

//console.log(primero);
console.log(tercero);

const [ , , ...resto] = numeros;

console.log(resto); //array con 30,40,y,50



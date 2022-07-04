const numeros = [10,20,30, 40,50, 60];
console.log (numeros);

//Acceder a todos los elementos, recorriendo el array

//Cuánto mide el array: .length (no inicia en 0, sino en 1)

console.log (numeros.length);

//Iterador

const meses = ["enero", 'febrero','marzo','abril','mayo','junio'];
console.log(meses);

for(let i =0; i < numeros.length; i++) {
    console.log(i); //0 1 2 3 4 5 
    console.log(meses[i]);
}




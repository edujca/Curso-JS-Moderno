const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 300,
    disponible: true,
   
}

//Tres métodos para objetos

//Object.keys devuelve un array con las llaves del objeto

console.log(Object.keys(producto));

//Object.values devuelve un array con los valores del objeto

console.log(Object.values(producto));

//Object.entries devuelve un array con los pares de llaves y valores

console.log(Object.entries(producto));
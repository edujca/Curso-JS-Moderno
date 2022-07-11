//Vreak y continue --> permite interceptar un elemento, identificarlo y continuar la ejecución

for (let i=0; i <= 10 ; i++){

    if( i === 5){
    console.log(`Este es el Número ${i}`);
    // break; //rompe la ejecución aunque la condición no se haya cumplido
    continue; //rompe el ciclo, pero continúa
    }
    console.log(`Número ${i}`);
}

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisor', precio: 100},
    { nombre: 'Tablet', precio: 200, descuento:true},
    { nombre: 'Audífonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},

]

for (let i = 0; i<carrito.length; i++){
    if(carrito[i].descuento){
    console.log(`El artículo ${carrito[i].nombre} tiene descuento`);
    continue;
    }
    console.log(carrito[i].nombre);
}
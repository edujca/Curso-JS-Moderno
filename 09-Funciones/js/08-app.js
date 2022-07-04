//Funciones que retornan valores. Una vez retornados, podemos pasarlos a otras funciones o hacer otras cosas

function sumar (a,b){
    return a + b;
}

const resultado = sumar(3,2);

console.log(resultado);

//Ejemplo más avanzado

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(400);
total = agregarCarrito(500);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);

console.log(total);
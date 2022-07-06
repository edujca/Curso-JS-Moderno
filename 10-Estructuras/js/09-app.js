//Operador ternario
// El ? equivale a if
// El : equivale a else. Es obligatorio
// Si no quiero que ponga nada tras : escribo null



const autenticado = true;
const puedePagar = false;

console.log( autenticado && puedePagar ? "Está autenticado" : 'No está autenticado');

//************/

const efectivo = 800;
const credito = 1000;
const disponible = efectivo + credito;
const totalPagar = 600;

//if anidado

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    if ( efectivo > totalPagar ) {
        console.log('Pagaste en efectivo');
    }else{
        console.log('Otra forma de pago');
    
        }
    
    
} else {
    console.log('No podemos pagar');
}

//ternario anidado

console.log( autenticado ? puedePagar ? "Está autenticado y puede pagar" : "Autenticado pero no puede pagar": 'No está autenticado');
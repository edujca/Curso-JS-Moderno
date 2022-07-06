//Operador OR
//Revisa que al menos una de las condiciones se cumplan

const efectivo = 300;
const credito = 1000;
const disponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log('Podemos pagar');
} else {
    console.log('No podemos pagar');
}
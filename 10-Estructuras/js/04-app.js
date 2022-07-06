//Else if --> puedo poner todos los que quiera
//Con los if se va a ejecutar la primera condición que se cumpla y ya no sigue revisando el código

const dinero = 300;
const totalPagar = 500;
const tarjeta = false;
const cheque = true

if (dinero >= totalPagar){
    console.log('Podemos pagar');
}
else if (tarjeta){
    console.log('Puedo pagar con tarjeta');
}
else if (cheque){
    console.log('Puedo pagar con cheque');
}
else{
    console.log('Fondos insuficientes');
}
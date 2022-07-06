//Switch


const metodoPago = 'cheque';


switch(metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`)
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`)
        break;  
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`)
        break;   
    default:
        console.log('Método de pago no soportado');
        break;
}
//Operadores AND
//Revisa que se cumplan dos condiciones dentro de tu if

const usuario = true;
const puedePagar = false;

if (usuario && puedePagar){
    console.log('Eres usuario y puedes comprar');
}
else if (!usuario && !puedePagar){
    console.log('No puedes comprar');
}
else if (!puedePagar){
    console.log('Fondos insuficientes');
}
else if(!usuario){
    console.log('Inicia sesion');
}
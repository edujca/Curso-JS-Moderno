//Cómo llamar a las funciones. 

iniciarApp();

function iniciarApp(){
    console.log('Iniciar App');
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda función');

    usuarioAutenticado('Marlene');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario. Espere...');
    console.log(`${usuario} autenticado OK`);
}
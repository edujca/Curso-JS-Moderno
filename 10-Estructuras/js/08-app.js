//Buenas prácitcas con los if
//Detener la ejecución de un if con una función

const autenticado = true;

if (autenticado){
    console.log('Usuario autenticado');
}

const puntaje = 450;

function revisaPuntaje(){

    if (puntaje > 400) {
        console.log('Excelente');
        return; //evita ejecutar el resto del código. Funciona sólo dentro de una función
    }
    if(puntaje > 300) {
        console.log('Buen puntaje');
        return;
    }
}

revisaPuntaje()

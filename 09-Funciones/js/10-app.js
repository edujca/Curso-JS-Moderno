//Arrow functions o funciones de flecha
//Son otra forma de declarar funciones, agregada en ECMA Script 6

const aprendiendo = function(){
    console.log('Aprendiendo JS');
}

//eliminamos function a la izquierda y colocamos => a la derecha de los paréntesis
const aprendiendo2 = () =>{
    console.log('Aprendiendo JS2');
}

//Al tener una sola línea, también podemos eliminar las llaves
const aprendiendo3 = () => console.log('Aprendiendo JS3');

//eb las de una línea, queda implícito el return, por lo que también podemos quitar los paréntesis
const aprendiendo4 = () => 'Aprendiendo JS4';



aprendiendo();
aprendiendo2();
aprendiendo3();
console.log(aprendiendo4());
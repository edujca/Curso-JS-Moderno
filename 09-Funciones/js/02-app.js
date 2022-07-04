//Declaración de Función (Function Declaration)

sumar();
function sumar() {
    console.log( 2 + 2);
}
//4


//Expresión de Función (Function Expression)

sumar2();
const sumar2 = function() {
    console.log(3+3);
        
}
//nada


//La diferencia es que en la declaración se puede llamar a la función antes de declararla. Esto es por el "hoisting": una vuelta en la que JS lee el código y otra en la que ejecuta
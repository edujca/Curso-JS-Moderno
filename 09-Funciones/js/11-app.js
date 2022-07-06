//Parámetros y argumentos dentro de las Arrow Functions

const aprendiendo = function(leng, leng2){
    console.log(`Aprendiendo ${leng} y ${leng2}`);
}

const aprendiendo2 = (leng) => {
    console.log(`Aprendiendo ${leng}`);
}

//Al tener un solo parámetro, podemos eliminar los paréntesis
const aprendiendo3 = leng => console.log(`Aprendiendo ${leng}`);

//en caso de más de un parámetro, sí que hay que poner paréntesis
const aprendiendo4 = (leng, leng2) => (`Aprendiendo ${leng} y ${leng2}`);



aprendiendo('JS','php');
aprendiendo2('JS2');
aprendiendo3('JS3');
aprendiendo4('JS3', 'php');

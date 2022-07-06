// == operador no estricto
// === operador estricto

const puntaje = 1000;

if (puntaje === "1000"){ //No es igual
    console.log('Es igual');
}
else{ 
    console.log('No es igual');
}

if (puntaje == "1000"){ //es igual
    console.log('Es igual');
}
else{ 
    console.log('No es igual');
}

if (puntaje != "1000"){ //Es igual
    console.log('Es diferente');
}
else{ 
    console.log('Es igual');
}

if (puntaje !== "1000"){ //Es diferente
    console.log('Es diferente');
}
else{ 
    console.log('Es igual');
}
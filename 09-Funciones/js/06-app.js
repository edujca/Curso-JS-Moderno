//Parámetros por default

function saludar(nombre = ' ', apellido = 'No tiene apellido'){
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar ('Scarlett', 'Johanson'); //Hola Scarlett Johanson

saludar ('Eva'); //Hola Eva No tiene apellido


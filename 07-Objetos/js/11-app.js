"use strict";
/*
const nombre = "hola";
const precio = 20;

const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${nombre} tiene un precio de ${precio}.`)
    }
}

producto.mostrarInfo(); //Muestra El producto: hola tiene un precio de 20.
*/
//En el código de arriba, muestra los datos que están fuera del objeto

//El código de abajo busca dentro del objeto con la propiedad this

const nombre = "hola";
const precio = 20;

const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}.`)
    }
}
const producto2 = {
    nombre: "Tablet", 
    precio: 2500,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}.`)
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();
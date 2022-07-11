//for...in
//for...in itera sobre objetos, y for...of lo hace sobre arrays, aunque la nomenclatura del último ejemplo, también es of y lo hace sobre array.


const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisor', precio: 100},
    { nombre: 'Tablet', precio: 200, descuento:true},
    { nombre: 'Audífonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},

]

for(let pendiente in pendientes){
    console.log(pendiente); //devuelve el índice(0 1 2...)
}

const auto = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for(let propiedad in auto){
    console.log(`${auto[propiedad]}`);
}

for (let [llave, valor] of Object.entries(auto)) {
    console.log(valor);
}
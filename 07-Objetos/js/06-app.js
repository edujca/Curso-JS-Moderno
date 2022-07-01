//Destructurind de objetos anidados

const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg.',
            medida: '1m.'
        }, 
        fabricacion:{
            pais: 'China'
        }
    }

}


const { nombre } = producto;
console.log(nombre);

//const { informacion: { fabricacion } } = producto;

//console.log(informacion); //daría error, ya que no existe
//console.log(fabricacion);

//hay que coger información por separado
const { informacion, informacion: { medidas } } = producto;

console.log(informacion);
console.log(medidas);

const { informacion: { fabricacion: {pais} } } = producto;
console.log(pais);

//Destructuring extrae la info y crea la variable a la vez
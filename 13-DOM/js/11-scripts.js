//Un ejemplo más avanzado de lo que podemos hacer con JS

//Construir un botón que muestre/oculte footer

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');
/*
btnFlotante.addEventListener('click', () =>{
    console.log('diste clik'); //esto es una función anónima. También se podría crear una función aparte y que el segundo argumento sea el nombre de esa función
})

*/

btnFlotante.addEventListener('click', mostrarOcultarFooter);



function mostrarOcultarFooter (){
    if (footer.classList.contains('activo')){
        footer.classList.remove('activo');
        //btnFlotante.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idiona y Moneda';
    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
    
}


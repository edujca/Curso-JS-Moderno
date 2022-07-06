//Añadir funciones en un objeto

const reproductor = {
    reproducir: function(id){ //métodos de propiedad, porque tiene una función
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function(){
        console.log('pausando...');
    },
    borrar: function(id){
        console.log(`Borrando canción ${id}`);
    },
    playlist: function(pl){
        console.log(`Reproduciendo la playlist ${pl}`);
    },
    pausarPlaylist: function(pP){
        console.log(`Pausando la playlist ${pP}`);
    }
}

reproductor.reproducir(30);
reproductor.pausar();

//Se puede agregar fuera o dentro
/*
reproductor.borrar = function(id){
    console.log(`Borrando canción ${id}`);
}
*/
reproductor.borrar(30);
reproductor.playlist('Rock');
reproductor.playlist('Pop');
reproductor.pausarPlaylist('Rock');
reproductor;
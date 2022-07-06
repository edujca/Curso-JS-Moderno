//Arrow functions en el reproductor de música
//Get y Set

const reproductor = {
    cancion: ' ',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción ${id}`),
    playlist: pl => console.log(`Reproduciendo la playlist ${pl}`),
    pausarPlaylist: pP => console.log(`Pausando la playlist ${pP}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`);
    },
}

reproductor.nuevaCancion = "Yesterday";
reproductor.obtenerCancion; //Al usar get no es necesario el paréntesis

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.playlist('Rock');
reproductor.playlist('Pop');
reproductor.pausarPlaylist('Rock');
reproductor;
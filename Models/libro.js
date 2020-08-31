class Libro {
    constructor(nombre,release,author) {
        this.nombre=nombre;
        this.release=release;
        this.author=author;
    }
    infoLibro(){
        console.log("El libro"+this.nombre+" del autor"+this.author +"que fue lanzado en el año "+ this.release)
    }
}
module.exports = Libro
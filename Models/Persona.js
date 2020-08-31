class Persona{
    constructor(nombre,nacimiento) {
        this.nombre=nombre
        this.nacimiento=nacimiento
    }

}
class Usuario extends Persona{
    constructor(nombre,nacimiento,cedula,password) {
        super(nombre,nacimiento);
        this.cedula=cedula;
        this.password=password;
    }
}
class Autor extends Persona{
    constructor(nombre,nacimiento,fallecimiento) {
        super(nombre,nacimiento);
        this.falecimiento = fallecimiento;
    }
}

module.exports = {Usuario,Autor};

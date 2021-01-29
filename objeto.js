'use strict';
class Pasen {
    constructor() {
        this._alumno = [];
        this._tutor = [];
        this._grupo = [];
        this._mensaje = [];



    }

    altaAlumnos(oAlumno) {

    }

    altaTutor() {

    }

    altaGrupo() {

    }

    enviarMensaje() {

    }

    listadoAlumnos() {

    }

    listadoGrupos() {

    }
    bajaAlumnos() {

    }

}
class Grupo {
    constructor(sIdGrupo, sNAlumnos, sAula, sCentro) {
        this.idGrupo = sIdGrupo;
        this.nAlumnos = sNAlumnos;
        this.aula = sAula;
        this.centro = sCentro;
    }
}

class Tutor {
    constructor(sDni, sNombre, sApellido, sAsignatura, sGrupo) {
        this.dni = sDni;
        this.nombre = sNombre;
        this.apellido = sApellido;
        this.asignatura = sAsignatura;
        this.grupo = sGrupo;

    }
}

class Alumno {
    constructor()
}
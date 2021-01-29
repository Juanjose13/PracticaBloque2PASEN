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

    altaTutor(oTutor) {

    }

    altaGrupo(oGrupo) {

    }

    enviarMensaje(oMensaje) {

    }

    listadoAlumnos() {

    }

    listadoGrupos() {

    }
    bajaAlumnos(oAlumno) {

    }

}
class Grupo {
    constructor(sIdGrupo, sNAlumnos, sAula, sCentro) {
        this.idGrupo = sIdGrupo;
        this.nAlumnos = sNAlumnos;
        this.aula = sAula;
        this.centro = sCentro;
    }
    toHTMLrow() {
        let sFila = "<tr>";
        sFila += "<td>" + this.idGrupo + "</td>";
        sFila += "<td>" + this.nAlumnos + "</td>";
        sFila += "<td>" + this.aula + "</td>";
        sFila += "<td>" + this.centro + "</td>";


        return sFila;
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
    toHTMLrow() {
        let sFila = "<tr>";
        sFila += "<td>" + this.dni + "</td>";
        sFila += "<td>" + this.nombre + "</td>";
        sFila += "<td>" + this.apellido + "</td>";
        sFila += "<td>" + this.asignatura + "</td>";
        sFila += "<td>" + this.grupo + "</td>";

        return sFila;
    }
}

class Alumno {
    constructor(sDni, sNombre, sApellido, sEdad, sGrupo) {
        this.dni = sDni;
        this.nombre = sNombre;
        this.apellido = sApellido;
        this.edad = sEdad;
        this.grupo = sGrupo;
    }
    toHTMLrow() {
        let sFila = "<tr>";
        sFila += "<td>" + this.dni + "</td>";
        sFila += "<td>" + this.nombre + "</td>";
        sFila += "<td>" + this.apellido + "</td>";
        sFila += "<td>" + this.edad + "</td>";
        sFila += "<td>" + this.grupo + "</td>";

        return sFila;
    }
}

class Mensaje {
    constructor(sMensaje) {
        this.mensaje = sMensaje;
    }
}
'use strict';
class Pasen {
    constructor() {
        this._alumno = [];
        this._tutor = [];
        this._grupo = [];
        this._mensaje = [];
    }

    altaAlumnos(oAlumno) {
        let bResultado = true;

        if (this._alumno.some(oA => oA.dni == oAlumno.dni) == true) {
            bResultado = false;
        } else {
            this._alumno.push(oAlumno);
        }
        return bResultado;
    }

    altaTutor(oTutor) {
        let bResultado = true;

        if (this._tutor.some(oT => oT.dni == oTutor.dni) == true) {
            bResultado = false;
        } else {
            this._tutor.push(oTutor);
        }
        return bResultado;

    }

    altaGrupo(oGrupo) {
        let bResultado = true;

        if (this._grupo.some(oG => oG.idGrupo == oGrupo.idGrupo) == true) {
            bResultado = false;
        } else {
            this._grupo.push(oGrupo);
        }
        return bResultado;

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
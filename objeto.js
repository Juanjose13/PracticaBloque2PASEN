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
    constructor(sIdGrupo,sGrupo, sNAlumnos, sAula, sCentro) {
        this.idGrupo = sIdGrupo;
        this.grupo = sGrupo;
        this.nAlumnos = sNAlumnos;
        this.aula = sAula;
        this.centro = sCentro;
    }
    HTMLrow()
    {
     let row = document.createElement("TR");
     let celda = row.insertCell(-1);
     celda.textContent = this.idGrupo;
     celda = row.insertCell(-1);
     celda.textContent = this.grupo;
     celda = row.insertCell(-1);
     celda.textContent = this.nAlumnos;
     celda = row.insertCell(-1);
     celda.textContent = this.aula;
     celda = row.insertCell(-1);
     celda.textContent = this.centro;
     celda = row.insertCell(-1);
  
     return row;
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
    HTMLrow()
   {
    let row = document.createElement("TR");
    let celda = row.insertCell(-1);
    celda.textContent = this.dni;
    celda = row.insertCell(-1);
    celda.textContent = this.nombre;
    celda = row.insertCell(-1);
    celda.textContent = this.apellido;
    celda = row.insertCell(-1);
    celda.textContent = this.asignatura;
    celda = row.insertCell(-1);
    celda.textContent = this.grupo;
    celda = row.insertCell(-1);
 
    return row;
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
    HTMLrow()
   {
    let row = document.createElement("TR");
    let celda = row.insertCell(-1);
    celda.textContent = this.dni;
    celda = row.insertCell(-1);
    celda.textContent = this.nombre;
    celda = row.insertCell(-1);
    celda.textContent = this.apellido;
    celda = row.insertCell(-1);
    celda.textContent = this.edad;
    celda = row.insertCell(-1);
    celda.textContent = this.grupo;
    celda = row.insertCell(-1);
 
    return row;
  }
}

class Mensaje {
    constructor(sMensaje) {
        this.mensaje = sMensaje;
    }
}
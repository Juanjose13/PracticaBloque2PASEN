//FUNCION PARA PROBAR INICIO DE SESION
"use strict";
var oPasen = new Pasen();

function empezar(){
    navegador.style.display="none";
    divFrmAltaAlumno.style.display="none";
    divFrmAltaTutor.style.display="none";
    divFrmAltaGrupo.style.display="none";
}
function iniciar()
{
    if (document.getElementById ("txtContraseña").value=='usuario' && document.getElementById("txtCorreo").value=='usuario')
    {   
        navegador.style.display="block";
        divFrmAltaAlumno.style.display="none";
        divFrmAltaTutor.style.display="none";
        divFrmAltaGrupo.style.display="none";
    } 
    else{ 
         alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
    } 
}


function altaAlumno(){

    divFrmAltaAlumno.style.display="block";
    divFrmAltaTutor.style.display="none";
    divFrmAltaGrupo.style.display="none";
    
}

function altaTutor(){
    
    divFrmAltaTutor.style.display="block";
    divFrmAltaAlumno.style.display="none";
    divFrmAltaGrupo.style.display="none";
}

function altaGrupo(){

    divFrmAltaGrupo.style.display="block";
    divFrmAltaAlumno.style.display="none";
    divFrmAltaTutor.style.display="none";
}

// function validar(){

// }

function añadeAlumno(){
    let oFormularioAltaAlumno = document.getElementById("formAlumno");
    // let oMensajes = document.getElementById("mensajesConductores");
    
    //VALIDAR FORMULARIOS -> DNI 11222333A {9 nºs y letra en mayúscula}
    let sDni = oFormularioAltaAlumno.txtDni.value.trim();
    let oVerificaDni = /^\d{8}[A-Z]$/;
    if(!oVerificaDni.test(sDni)){
        alert("Dni Erróneo");
        document.getElementById("txtDni").focus();
        return false;
    }else if(oVerificaDni.test(sDni)){
        // document.getElementById("txtDni").removeAttribute("color");

    }
    // if(sDni.charAt(8) != oLetras[(sDni.substring(0,8))%23]){return false;}

    let sNombre = oFormularioAltaAlumno.txtNombre.value.trim();
    let sNom = document.getElementById("txtNombre");
    if(sNombre == null || sNombre.length == 0 || /^\s+$/.test(sNombre)){
        // sNom.addEventListener("input", function(){
        //     if(sNom.validity.typeMismatch){
        //         sNom.setCustomValidity("Se espera que escribas un nombre");
        //     }else{
        //         sNom.setCustomValidity("");
        //     }
        // });
        
        alert("Campo vacío");
        document.getElementById("txtNombre").focus();

        return false;
    }
    let sApellidos = oFormularioAltaAlumno.txtApellido.value.trim();
    // VALIDAR SOLO NÚMEROS
    let sEdad = oFormularioAltaAlumno.txtEdad.value.trim();
    let sGrupo = oFormularioAltaAlumno.txtGrupo.value.trim();
    
    
    let nuevoAlumno = new Alumno(sDni, sNombre, sApellidos, sEdad, sGrupo);
    
    
    if (oPasen.altaAlumnos(nuevoAlumno)) {
        // oMensajes.innerHTML = "<p style='color:green'>" + "Conductor dado de alta" + "</p>";
        // limpiarCampos();
    } else {
        // oMensajes.innerHTML = "<p style='color:red'>" + "Error, el conductor que intenta introducir ya existe" + "</p>";
    }
    
    formAlumno.reset();
    
}
function añadeTutor()
{
    
    let oFormularioTutor=document.getElementById("formTutor");
    // let oMensajes = document.getElementById("mensajesConductores");


    let sDni = oFormularioTutor.txtDni.value.trim();
    let sNombre = oFormularioTutor.txtNombre.value.trim();
    let sApellidos = oFormularioTutor.txtApellido.value.trim();
    let sAsignatura = oFormularioTutor.txtAsignatura.value.trim();
    let sGrupo = oFormularioTutor.txtGrupo.value.trim();

      let nuevoTutor = new Tutor(sDni, sNombre, sApellidos, sAsignatura, sGrupo);

        if (oPasen.altaTutor(nuevoTutor)) {
        oMensajes.innerHTML = "<p style='color:green'>" + "Tutor dado de alta" + "</p>";
        limpiarCampos();
    } else {
        oMensajes.innerHTML = "<p style='color:red'>" + "Error, el tutor que intenta introducir ya existe" + "</p>";
    }

    formTutor.reset();



}

function añadeGrupo(){
    let oFormularioGrupo = document.getElementById("formGrupo");
    // let oMensajes = document.getElementById("mensajesConductores");
    
    //VALIDAR FORMULARIOS -> ID 1122 {4 nºs}
    let sId = oFormularioGrupo.txtId.value.trim();
    let inumAlumnos = parseInt(oFormularioGrupo.numAlumnos.value.trim());
    let sAula = oFormularioGrupo.txtAula.value.trim();
    let sCentro = oFormularioGrupo.txtCentro.value.trim();
    
    
    let nuevoGrupo = new Grupo(sId, inumAlumnos, sAula, sCentro);
    
    
    if (oPasen.altaGrupo(nuevoGrupo)) {
        oMensajes.innerHTML = "<p style='color:green'>" + "Conductor dado de alta" + "</p>";
        limpiarCampos();
    } else {
        oMensajes.innerHTML = "<p style='color:red'>" + "Error, el conductor que intenta introducir ya existe" + "</p>";
    }
    
    formGrupo.reset();
    
}
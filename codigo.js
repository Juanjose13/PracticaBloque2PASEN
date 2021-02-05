//FUNCION PARA PROBAR INICIO DE SESION
"use strict";
var oPasen = new Pasen();

frmInicio.btnInicio.addEventListener("click", validarLogin, false);

navegador.style.display="none";
divFrmAltaAlumno.style.display="none";
divFrmAltaTutor.style.display="none";
divFrmAltaGrupo.style.display="none";

function validarLogin(){
    let oValidarUsuario = frmInicio.txtCorreo.value.trim();
    let oValidarPass = frmInicio.txtContraseña.value.trim();
    let iniciar=true;

    let expReg = /^([a-zá-ú]{3,})+$/i;
    if(oValidarUsuario == "" || !expReg.test(oValidarPass)){        
        frmInicio.txtCorreo.style.color = "red";
        iniciar=false;   
    }else{
        frmInicio.txtCorreo.style.color = "black";
    }
    
    if(oValidarPass == "" || !expReg.test(oValidarPass)){
        frmInicio.txtContraseña.style.color = "red";
        iniciar=false;
    }else{
        frmInicio.txtContraseña.style.color = "black";
    }
    
    if(iniciar ){
        if(oValidarUsuario=='usuario' && oValidarPass=='usuario'){
            frmInicio.btnInicio.setAttribute("data-dismiss", "modal");
            navegador.style.display="block";
            divFrmAltaAlumno.style.display="none";
            divFrmAltaTutor.style.display="none";
            divFrmAltaGrupo.style.display="none";
            limpiarCampos(frmInicio);
            
        }else{
            
            frmInicio.txtCorreo.style.color = "red";
            frmInicio.txtContraseña.style.color = "red";
            alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 

        }
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

formAlumno.btnAñadeAlumno.addEventListener("click",añadeAlumno,false);

function añadeAlumno(){
    let oFormularioAltaAlumno = document.getElementById("formAlumno");
    // let oMensajes = document.getElementById("mensajesConductores");
    
    //VALIDAR FORMULARIOS -> DNI 11222333A {9 nºs y letra en mayúscula}
    let sDni = oFormularioAltaAlumno.txtDni.value.trim();
    let oVerificaDni = /^\d{8}[A-Z]$/;
    if(!oVerificaDni.test(sDni)){
        alert("Dni Erróneo");
        document.getElementById("txtDni").style.color= "red";
        document.getElementById("txtDni").focus();
        return false;
    }else{
        document.getElementById("txtDni").style.color= "black";
        
    }
    
    let sNombre = oFormularioAltaAlumno.txtNombre.value.trim();
    
    if(sNombre == null || sNombre.length == 0 || /^\s+$/.test(sNombre)){
        
        alert("Campo vacío");
        document.getElementById("txtNombre").style.color= "red";
        document.getElementById("txtNombre").focus();
        
        return false;
    }else{

        document.getElementById("txtNombre").style.color= "black";
    }
    let sApellidos = oFormularioAltaAlumno.txtApellido.value.trim();
    if(sApellidos.length == 0 || /^\s+$/.test(sApellidos)){
        alert("Campo vacío, rellénelo");
        document.getElementById("txtApellido").focus();
        document.getElementById("txtApellido").style.color= "red";
        
        return false;
    }else{
        document.getElementById("txtApellido").style.color= "black";
    }
    // VALIDAR SOLO NÚMEROS
    let sEdad = oFormularioAltaAlumno.txtEdad.value.trim();
    let oVerificaEdad = /^\d{1,2}$/;
    if(!oVerificaEdad.test(sEdad)){
        alert("Edad Errónea");
        document.getElementById("txtEdad").focus();
        document.getElementById("txtEdad").style.color= "red";
        return false;
    }else{
        document.getElementById("txtEdad").style.color= "black";
    }
    let sGrupo = oFormularioAltaAlumno.txtGrupo.value.trim();
    let oVerificaGrupo = /([A-Z]\1)?$/;
    // let sEdad = oFormularioAltaAlumno.txtEdad.value.trim();
    if(!oVerificaGrupo.test(sGrupo)){
        alert("Seleccione el grupo");
        document.getElementById("txtGrupo").focus();
        document.getElementById("txtGrupo").style.color= "red";
        return false;
    }else{
        document.getElementById("txtGrupo").style.color= "black";
    }
    
    let nuevoAlumno = new Alumno(sDni, sNombre, sApellidos, sEdad, sGrupo);
    
    
    if (oPasen.altaAlumnos(nuevoAlumno)) {
        alert("Alumno Añadido!")
        limpiarCampos(formAlumno);
    } else {
        alert("DNI Repetido!");
    }
    
    
}
// formTutor.btnAñadeAlumno.addEventListener("click",añadeTutor,false);

function añadeTutor()
{
    
    let oFormularioTutor=document.getElementById("formTutor");
    // let oMensajes = document.getElementById("mensajesConductores");


    let sDni = oFormularioTutor.txtDni.value.trim();
    let oVerificaDni = /^\d{8}[A-Z]$/;
    if(!oVerificaDni.test(sDni)){
        alert("Dni Erróneo");
        document.getElementById("txtDni").style.color= "red";
        document.getElementById("txtDni").focus();
        return false;
    }else{
        document.getElementById("txtDni").style.color= "black";
        
    }

    let sNombre = oFormularioTutor.txtNombre.value.trim();
    
    if(sNombre == null || sNombre.length == 0 || /^\s+$/.test(sNombre)){
        
        alert("Campo vacío");
        document.getElementById("txtNombre").style.color= "red";
        document.getElementById("txtNombre").focus();
        document.getElementById("txtNombre").style.color= "red";
        
        return false;
    }else{
        document.getElementById("txtNombre").style.color= "black";
    }

    let sApellidos = oFormularioTutor.txtApellido.value.trim();
    if(sApellidos.length == 0 || /^\s+$/.test(sApellidos)){
        alert("Campo vacío, rellénelo");
        document.getElementById("txtApellido").focus();
        document.getElementById("txtApellido").style.color= "red";
        
        return false;
    }else{
        document.getElementById("txtApellido").style.color= "black";
    }



    let sAsignatura = oFormularioTutor.txtAsignatura.value.trim();
    if(sAsignatura.length=="" || /^\s+$/.test(sAsignatura)){
        alert("Asignatura Errónea");
        document.getElementById("txtAsignatura").focus();
        document.getElementById("txtAsignatura").style.color= "red";
        return false;
    }else{
        document.getElementById("txtAsignatura").style.color= "black";
    }


    let sGrupo = oFormularioTutor.txtGrupo.value.trim();
    let oVerificaGrupo = /([A-Z]\1)?$/;
    // let sEdad = oFormularioAltaAlumno.txtEdad.value.trim();
    if(!oVerificaGrupo.test(sGrupo)){
        alert("Seleccione el grupo");
        document.getElementById("txtGrupo").focus();
        document.getElementById("txtGrupo").style.color= "red";
        return false;
    }else{
        document.getElementById("txtGrupo").style.color= "black";
    }

      let nuevoTutor = new Tutor(sDni, sNombre, sApellidos, sAsignatura, sGrupo);

        if (oPasen.altaTutor(nuevoTutor)) {
            limpiarCampos(formTutor);
        } else {
        alert("Dni ya utilizado!")
    }
    
    
    
    
    
}

function añadeGrupo(){
    let oFormularioGrupo = document.getElementById("formGrupo");
    // let oMensajes = document.getElementById("mensajesConductores");
    
    //VALIDAR FORMULARIOS -> ID 1122 {4 nºs}
    let sId = oFormularioGrupo.txtId.value.trim();
    let oVerificaId = /^\d{4}$/;
    if(!oVerificaId.test(sId)){
        alert("ID Erróneo");
        document.getElementById("txtId").style.color= "red";
        document.getElementById("txtId").focus();
        return false;
    }else{
        document.getElementById("txtId").style.color= "black";
        
    }
    let sGrupo = oFormularioGrupo.txtNombre.value.trim();
    let oVerificaGrupo = /([A-Z]\1)?$/;
    // let sEdad = oFormularioAltaAlumno.txtEdad.value.trim();
    if(!oVerificaGrupo.test(sGrupo)){
        alert("Seleccione el grupo");
        document.getElementById("txtGrupo").focus();
        document.getElementById("txtGrupo").style.color= "red";
        return false;
    }else{
        document.getElementById("txtGrupo").style.color= "black";
    }

    let inumAlumnos = parseInt(oFormularioGrupo.numAlumnos.value.trim());
    let oVerificanAlumno = /^\d{1,2}$/;
    if(!oVerificanAlumno.test(inumAlumnos) || inumAlumnos == null){
        alert("Ningún ha metido ningún número de alumnos");
        document.getElementById("numAlumnos").focus();
        document.getElementById("numAlumnos").style.color= "red";
        return false;
    }else{
        document.getElementById("numAlumnos").style.color= "black";
    }
    
    let sAula = oFormularioGrupo.txtAula.value.trim();
    if(sAsignatura.length=="" || /^([A-Z]\d{3})/.test(sAsignatura)){
        alert("Aula Errónea");
        document.getElementById("txtAula").focus();
        document.getElementById("txtAula").style.color= "red";
        return false;
    }else{
        document.getElementById("txtAula").style.color= "black";
    }
    let sCentro = oFormularioGrupo.txtCentro.value.trim();
    
    
    let nuevoGrupo = new Grupo(sId, sGrupo, inumAlumnos, sAula, sCentro);
    
    
    if (oPasen.altaGrupo(nuevoGrupo)) {
        // oMensajes.innerHTML = "<p style='color:green'>" + "Conductor dado de alta" + "</p>";
        limpiarCampos(formGrupo);
    } else {
        // oMensajes.innerHTML = "<p style='color:red'>" + "Error, el conductor que intenta introducir ya existe" + "</p>";
        alert("Dni ya utilizado!")
    }
    
}


// MENSAJE -> crear un array, -> GENERICO un formulario, selecciones que alumno va o tutor, 
// creo un formulario para enviar oMensajes desde el administrador hacia (tutor o alumno)
//     un select de Alumno (si selecciono un alumno, ponga el select de tutor en blanco)
//     un select de Tutor  (si selecciono un tutor, ponga el select de alumno en blanco)
//     text encabezado
//     text cuerpo del oMensajes

//     para enviar el mensaje ver si se lo envio al alumno o al tutor (la que esta rellene)



function limpiarCampos(form){
    console.log(form);
    form.reset();
}
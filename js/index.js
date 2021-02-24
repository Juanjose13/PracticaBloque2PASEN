'use strict';

// Carga dinámica de formularios
$("#altaAlumno").click(abrirAltaAlumno);
$("#altaTutor").click(abrirAltaTutor);
$("#altaMensaje").click(abrirAltaMensaje);
$("#altaGrupo").click(abrirAltaGrupo);
$("#btnInicio").click(validarLogin);
//$("#mostrarListadoCliente").click(fMostrarListadoCliente);
/* $("#mostrarListadoVentas").click(fMostrarListadoVentas);
$("#mostrarListadoEmpleados").click(fMostrarListadoEmpleado); */




function validarLogin() {
    let oValidarUsuario = frmInicio.txtCorreo.value.trim();
    let oValidarPass = frmInicio.txtContraseña.value.trim();
    let iniciar = true;

    let expReg = /^([a-zá-ú]{3,})+$/i;
    if (oValidarUsuario == "" || !expReg.test(oValidarPass)) {
        frmInicio.txtCorreo.style.color = "red";
        iniciar = false;
    } else {
        frmInicio.txtCorreo.style.color = "black";
    }

    if (oValidarPass == "" || !expReg.test(oValidarPass)) {
        frmInicio.txtContraseña.style.color = "red";
        iniciar = false;
    } else {
        frmInicio.txtContraseña.style.color = "black";
    }
}

function abrirAltaAlumno() {

    // Oculto todos los formularios menos este
    $("form:not('#divFrmAltaAlumno')").hide("normal");
    $("#body").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#formAlumno').length == 0) {
        $("<div>").appendTo('#formularios').load("html/FormularioAltaAlumnos.php",
        function() {
            $.getScript("Ajax/alumnos/altaAlumno.js");
        });
            // $.ajax({
            //     url: "Ajax/grupos/buscarGrupos.php",
            //     // data: "FormularioAltaAlumnos.html",
            //     cache: false,
            //     async: true, // por defecto
            //     method: "POST",
            //     success: function(resultado){
            //         let datosSelect = JSON.parse(resultado);
            //         datosSelect.forEach(element => {
            //             alert(element.idGrupo);
            //         });
            //         return datosSelect;
            //     }
            // });
        
    } else {
        
        
        // Lo muestro si está oculto
        $('#formAlumno').show("normal");
        // formTutor.style.display = "none";
    }
}

function abrirAltaTutor(){
    // Oculto todos los formularios menos este
    $("form:not('#divFrmAltaTutor')").hide("normal");
    $("#body").hide("normal");
    // $("#formularios").hide("normal");
    
    // Verifico si ya he cargado el formulario antes
    if ($('#formTutor').length == 0) {
        $("<div>").appendTo('#formularios').load("html/FormularioAltaTutor.html",
        function() {
            $.getScript("Ajax/tutores/altaTutor.js");
        });
        
    } else {
        // Lo muestro si está oculto
        $('#formTutor').show("normal");
        // formAlumno.style.display = "none";
    }
}

function abrirAltaGrupo(){
    // Oculto todos los formularios menos este
    $("form:not('#divFrmAltaGrupo')").hide("normal");
    $("#body").hide("normal");
    // $("#formularios").hide("normal");
    
    // Verifico si ya he cargado el formulario antes
    if ($('#formGrupo').length == 0) {
        $("<div>").appendTo('#formularios').load("html/FormularioAltaGrupo.php",
        function() {
            $.getScript("Ajax/grupos/altaGrupo.js");
        });
        
    } else {
        // Lo muestro si está oculto
        $('#formGrupo').show("normal");
        // formAlumno.style.display = "none";
    }
}
function abrirAltaMensaje(){
    // Oculto todos los formularios menos este
    $("form:not('#divFrmAltaMensaje')").hide("normal");
    $("#body").hide("normal");
    // $("#formularios").hide("normal");
    
    // Verifico si ya he cargado el formulario antes
    if ($('#formMensaje').length == 0) {
        $("<div>").appendTo('#formularios').load("html/FormularioAltaMensajes.html",
        function() {
            $.getScript("Ajax/mensajes/altaMensaje.js");
        });
        
    } else {
        // Lo muestro si está oculto
        $('#formMensaje').show("normal");
        // formAlumno.style.display = "none";
    }
}
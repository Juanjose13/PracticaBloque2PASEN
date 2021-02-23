'use strict';

// Carga dinámica de formularios
$("#altaAlumno").click(abrirAltaAlumno);
$("#altaTutor").click(abrirAltaTutor);
// $("#mostrarCarrito").click(abrirCarrito);
$("#altaGrupo").click(abrirAltaGrupo);
//$("#mostrarListadoCliente").click(fMostrarListadoCliente);
/* $("#mostrarListadoVentas").click(fMostrarListadoVentas);
$("#mostrarListadoEmpleados").click(fMostrarListadoEmpleado); */


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
            // $.getScript("tutor/altaTutor.js");
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
        $("<div>").appendTo('#formularios').load("html/FormularioAltaGrupo.html",
        function() {
            // $.getScript("tutor/altaTutor.js");
        });
        
    } else {
        // Lo muestro si está oculto
        $('#formGrupo').show("normal");
        // formAlumno.style.display = "none";
    }
}
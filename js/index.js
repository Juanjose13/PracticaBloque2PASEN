'use strict';

// Carga dinámica de formularios
$("#altaAlumno").click(abrirAltaAlumno);
$("#altaTutor").click(abrirAltaTutor);
// $("#mostrarCarrito").click(abrirCarrito);
$("#altaEmpleado").click(abrirAltaEmpleado);
$("#mostrarListadoCliente").click(fMostrarListadoCliente);
$("#mostrarListadoVentas").click(fMostrarListadoVentas);
$("#mostrarListadoEmpleados").click(fMostrarListadoEmpleado);


function abrirAltaAlumno() {

    // Oculto todos los formularios menos este
    $("form:not('#divFrmAltaAlumno')").hide("normal");
    $("#body").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#formAlumno').length == 0) {
        $("<div>").appendTo('#formularios').load("html/FormularioAltaAlumnos.html",
        function() {
            $.getScript("../Ajax/alumnos/altaAlumno.js");
        });
        
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
        $("<div>").appendTo('#formularios').load("../html/FormularioAltaTutor.html",
        function() {
            // $.getScript("tutor/altaTutor.js");
        });
        
    } else {
        // Lo muestro si está oculto
        $('#formTutor').show("normal");
        // formAlumno.style.display = "none";
    }
}
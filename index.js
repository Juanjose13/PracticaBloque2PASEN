'use strict';

// Carga dinámica de formularios
//$("#altaAlumno").click(abrirAltaAlumno);
$("#altaTutor").click(abrirAltaTutor);
$("#mostrarCarrito").click(abrirCarrito);
$("#altaEmpleado").click(abrirAltaEmpleado);
$("#mostrarListadoCliente").click(fMostrarListadoCliente);
$("#mostrarListadoVentas").click(fMostrarListadoVentas);
$("#mostrarListadoEmpleados").click(fMostrarListadoEmpleado);

/*
function abrirAltaAlumno() {

    // Oculto todos los formularios menos este
    $("form:not('#frmAltaArticulo')").hide("normal");
    $("#body").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#frmAltaAlumno').size() == 0) {
        $("<div>").appendTo('#formularios').load("../html/FormularioAltaAlumno.html",
            function() {
                $.getScript("../Ajax/alumnos/altaAlumno.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaAlumno').show("normal");
    }
}
*/
function abrirAltaTutor(){
    // Oculto todos los formularios menos este
    $("form:not('#divFrmAltaTutor')").hide("normal");
    $("#body").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#divFrmAltaTutor').size() == 0) {
        $("<div>").appendTo('#formularios').load("../html/FormularioAltaTutor.html",
            function() {
                $.getScript("tutor/altaTutor.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#divFrmAltaTutor').show("normal");
    }
}
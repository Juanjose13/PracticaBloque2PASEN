'use strict';

// Carga dinámica de formularios
$("#altaAlumno").click(abrirAltaAlumno);
$("#altaCliente").click(abrirAltaCliente);
$("#mostrarCarrito").click(abrirCarrito);
$("#altaEmpleado").click(abrirAltaEmpleado);
$("#mostrarListadoCliente").click(fMostrarListadoCliente);
$("#mostrarListadoVentas").click(fMostrarListadoVentas);
$("#mostrarListadoEmpleados").click(fMostrarListadoEmpleado);


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
'use strict';

// Carga dinámica de formularios
$("#altaAlumno").click(abrirAltaAlumno);
$("#altaTutor").click(abrirAltaTutor);
$("#altaMensaje").click(abrirAltaMensaje);
$("#altaGrupo").click(abrirAltaGrupo);
$("#btnInicio").click(validarLogin);
$("#listadoAlumno").click(listarAlumnos);
$("#listadoAlumno").click(function() {$("#listados").show(); $("#formularios").hide(); listarAlumnos();});

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
        $("<div>").appendTo('#formularios').load("html/FormularioAltaMensajes.php",
        function() {
            $.getScript("Ajax/mensajes/altaMensaje.js");
        });
        
    } else {
        // Lo muestro si está oculto
        $('#formMensaje').show("normal");
        // formAlumno.style.display = "none";
    }
}
//LIstados alumnos
function listarAlumnos(){
    // fOcultarFormularios();
    fVaciarTabla();
    //Borrar los nodos hijos de la tabla
    let tHead = document.getElementById("tabla").createTHead();
    let tBody = document.getElementById("tabla").appendChild(document.getElementById("tabla").createTBody());
    let cabecera = tHead.insertRow(-1);
    cabecera.insertCell(-1).textContent = "ID";
    cabecera.insertCell(-1).textContent = "DNI";
    cabecera.insertCell(-1).textContent = "NOMBRE";
    cabecera.insertCell(-1).textContent = "APELLIDOS";
    cabecera.insertCell(-1).textContent = "EDAD";
    
    
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
      }
    //Añadir las filas a la tabla
    //GET from alumnos
      $.get("./Ajax/alumnos/listadoAlumnos.php", respuestaListadoAlumnos, "xml");
      function respuestaListadoAlumnos(oXML){
        let alumnos = oXML.querySelectorAll("alumnos");
        
        alumnos.forEach(function(alumnos){
            let fila = tBody.insertRow(-1);
            fila.insertCell(-1).textContent = alumnos.querySelector("idAlumno").textContent;
            fila.insertCell(-1).textContent = alumnos.querySelector("dniAlumno").textContent;
            fila.insertCell(-1).textContent = alumnos.querySelector("nombreAlumno").textContent;
            fila.insertCell(-1).textContent = alumnos.querySelector("apellido").textContent;
            fila.insertCell(-1).textContent = alumnos.querySelector("edad").textContent;
           
        });
        
      }
    
    document.getElementById("tabla").style.display = "table";
    //$("#body").style.display = "block";
    $("#body").show("normal");
}



function listarTutor(){
    // fOcultarFormularios();
    fVaciarTabla();
    //Borrar los nodos hijos de la tabla
    let tHead = document.getElementById("tabla").createTHead();
    let tBody = document.getElementById("tabla").appendChild(document.getElementById("tabla").createTBody());
    let cabecera = tHead.insertRow(-1);
    cabecera.insertCell(-1).textContent = "ID";
    cabecera.insertCell(-1).textContent = "DNI";
    cabecera.insertCell(-1).textContent = "NOMBRE";
    cabecera.insertCell(-1).textContent = "APELLIDOS";
    cabecera.insertCell(-1).textContent = "EDAD";
    
    
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
      }
    //Añadir las filas a la tabla
    //GET from alumnos
      $.get("./Ajax/grupos/listadoAlumnos.php", respuestaListadoAlumnos, "xml");
      function respuestaListadoAlumnos(oXML){
        let alumnos = oXML.querySelectorAll("alumnos");
        
        alumnos.forEach(function(alumnos){
            let fila = tBody.insertRow(-1);
            fila.insertCell(-1).textContent = alumnos.querySelector("idAlumno").textContent;
            fila.insertCell(-1).textContent = alumnos.querySelector("dniAlumno").textContent;
            fila.insertCell(-1).textContent = alumnos.querySelector("nombreAlumno").textContent;
            fila.insertCell(-1).textContent = alumnos.querySelector("apellido").textContent;
            fila.insertCell(-1).textContent = alumnos.querySelector("edad").textContent;
           
        });
        
      }
    
    document.getElementById("tabla").style.display = "table";
    //$("#body").style.display = "block";
    $("#body").show("normal");
}

function fVaciarTabla(){
    let hijosTabla = document.querySelectorAll('#tabla > *');
    if(hijosTabla.length > 0){
        hijosTabla.forEach(hijo=>{
            hijo.remove();
        })
    }
}
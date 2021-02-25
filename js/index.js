'use strict';

// Carga dinámica de formularios

$("#altaAlumno").click(abrirAltaAlumno);
$("#altaTutor").click(abrirAltaTutor);
$("#altaMensaje").click(abrirAltaMensaje);
$("#altaGrupo").click(abrirAltaGrupo);
$("#btnInicio").click(validarLogin);
$("#listadoAlumno").click(listarAlumnos);
$("#listadoTutor").click(listarTutor);
$("#listadoGrupo").click(listarGrupo);

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
    $("#listados").hide("normal");
    $("#formularios").show("normal");

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
    $("#listados").hide("normal");
    $("#formularios").show("normal");
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
    $("#listados").hide("normal");
    $("#formularios").show("normal");
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
    $("#listados").hide("normal");
    $("#formularios").show("normal");
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
function rellenarCombosGrupos()
{
    alert("rellenarCombosGrupos");
    var oListaGrupo = null;
    if(localStorage["grupo"] != null)
    {
        oListaGrupo = JSON.parse(localStorage["grupo"]);
        procesarRellenarComboGrupo(oListaGrupo);
    }
    else
    {
        let oAjax = instanciarXHR();
        alert("Llega al PHP");
        var sURL = "/grupos/buscarGrupos.php";

        oAjax.open("GET", encodeURI(sURL));

        oAjax.addEventListener("readystatechange", procesarRespuesta);

        oAjax.send();
    }
}

function instanciarXHR() {
    var xhttp = null;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return xhttp;
}

function procesarRespuesta()
{ /* PASAR A JSON.PARSE LA RESPUESTA DEL SERVIDOR */
    var oAjax = this;
    //console.log(oAjax.responseText)

    if (oAjax.readyState == 4 && oAjax.status == 200) 
    {
       let olistadoGrupo =  JSON.parse(oAjax.responseText);
       console.log(olistadoGrupo)
        procesarRellenarComboGrupo(olistadoGrupo);
        /* PASAR A JSON.STRINGIFY EL ARRAY */
        localStorage["grupo"] = JSON.stringify(olistadoGrupo);

    }
}

function procesarRellenarComboGrupo(olistadoGrupo)
{
    console.log(olistadoGrupo);
    $("#selectGrupo").empty();
    let sOption="";
    for(let i=0;i<olistadoGrupo.length;i++)
    {
        sOption += "<option value='"+olistadoGrupo[i].idgrupo+"'>"+olistadoGrupo[i].grupo+"</option>"
    }

    $("#selectGrupo").html(sOption);

}


//LIstados alumnos
function listarAlumnos(){
    fOcultarFormularios();
    fVaciarTabla();
    $("#listados").show();
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
    fOcultarFormularios();
    fVaciarTabla();
    $("#listados").show();
    //Borrar los nodos hijos de la tabla
    let tHead = document.getElementById("tabla").createTHead();
    let tBody = document.getElementById("tabla").appendChild(document.getElementById("tabla").createTBody());
    let cabecera = tHead.insertRow(-1);
    cabecera.insertCell(-1).textContent = "ID";
    cabecera.insertCell(-1).textContent = "DNI";
    cabecera.insertCell(-1).textContent = "NOMBRE";
    cabecera.insertCell(-1).textContent = "ASIGNATURA";
    
    
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
      }
    //Añadir las filas a la tabla
    //GET from alumnos
      $.get("./Ajax/tutores/listadoTutores.php", respuestaListadoTutor, "xml");
      function respuestaListadoTutor(oXML){
        let tutor = oXML.querySelectorAll("tutores");
        
        tutor.forEach(function(tutor){
            let fila = tBody.insertRow(-1);
            fila.insertCell(-1).textContent = tutor.querySelector("idTutor").textContent;
            fila.insertCell(-1).textContent = tutor.querySelector("dniTutor").textContent;
            fila.insertCell(-1).textContent = tutor.querySelector("nombreTutor").textContent;
            fila.insertCell(-1).textContent = tutor.querySelector("asignatura").textContent;
           
        });
        
      }
    
    document.getElementById("tabla").style.display = "table";
    //$("#body").style.display = "block";
    $("#body").show("normal");
}
function listarGrupo(){
    fOcultarFormularios();
    fVaciarTabla();
    $("#listados").show("normal");
    //Borrar los nodos hijos de la tabla
    let tHead = document.getElementById("tabla").createTHead();
    let tBody = document.getElementById("tabla").appendChild(document.getElementById("tabla").createTBody());
    let cabecera = tHead.insertRow(-1);
    cabecera.insertCell(-1).textContent = "ID";
    cabecera.insertCell(-1).textContent = "GRUPO";
    cabecera.insertCell(-1).textContent = "Nº ALUMNOS";
    cabecera.insertCell(-1).textContent = "AULA";
    cabecera.insertCell(-1).textContent = "CENTRO";
    
    
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
      }
    //Añadir las filas a la tabla
    //GET from alumnos
      $.get("./Ajax/grupos/listadoGrupos.php", respuestaListadoGrupo, "xml");
      function respuestaListadoGrupo(oXML){
        let grupo = oXML.querySelectorAll("grupos");
        
        grupo.forEach(function(grupo){
            let fila = tBody.insertRow(-1);
            fila.insertCell(-1).textContent = grupo.querySelector("idGrupo").textContent;
            fila.insertCell(-1).textContent = grupo.querySelector("grupo").textContent;
            fila.insertCell(-1).textContent = grupo.querySelector("nAlumnos").textContent;
            fila.insertCell(-1).textContent = grupo.querySelector("aula").textContent;
            fila.insertCell(-1).textContent = grupo.querySelector("centro").textContent;
           
        });
        
      }
    
    document.getElementById("tabla").style.display = "table";
    //$("#body").style.display = "block";
    $("#body").show("normal");
}

function fOcultarFormularios(){
    document.getElementById("formularios").style.display = "none";
    //frmAltaEmpleado.style.display = "none";
    if(document.getElementById("formAlumno") != null){
        formAlumno.style.display = "none";
    }
    /*if($.contains(document.body, document.getElementById("frmAltaArticulo") )) {
        frmAltaArticulo.style.display = "none";
    }*/
    if(document.getElementById("formTutor") != null){
        formTutor.style.display = "none";
    }
    if(document.getElementById("formGrupo") != null){
        formGrupo.style.display = "none";
    }
    //frmAltaCliente.style.display = "none";  
    
}
function fOcultarListados(){
    document.getElementById("listados").style.display = "none";
    //frmAltaEmpleado.style.display = "none";
    if(document.getElementById("tabla") != null){
        listados.style.display = "none";
    }
}

function fVaciarTabla(){
    let hijosTabla = document.querySelectorAll('#tabla > *');
    if(hijosTabla.length > 0){
        hijosTabla.forEach(hijo=>{
            hijo.remove();
        })
    }
}

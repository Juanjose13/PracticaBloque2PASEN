'use strict';

$("#btnAñadeGrupo").click(fAceptarAltaGrupo);

function fAceptarAltaGrupo()
{
    let oFormularioAltaGrupo = document.getElementById("formGrupo");
    let mensaje = "ERROR:";
    let bValido = true;
    limpiarErrores();
    

    let sGrupo = oFormularioAltaGrupo.txtGrupo.value.trim();
    let oVerificaGrupo = /^[A-Z]{1}$/;
    if (!oVerificaGrupo.test(sGrupo)) {
        bValido = false;
        mensaje += "\nEl nombre del GRUPO es erróneo";
        // alert("Dni Erróneo");
        document.getElementById("txtGrupo").style.color = "red";
        document.getElementById("txtGrupo").focus();
        return false;
    } else {
        document.getElementById("txtGrupo").style.color = "black";
        
    }
    
    let sNumAlum = oFormularioAltaGrupo.numAlumnos.value.trim();

    if (sNumAlum == null || sNumAlum.length == 0 || /^\s+$/.test(sNumAlum)) {
        
        // alert("Campo vacío");
        bValido = false;
        mensaje += "\nEl numeros de alumnos es vacío.";
        document.getElementById("numAlumnos").style.color = "red";
        document.getElementById("numAlumnos").focus();
        
        return false;
    }
    else{
            
        document.getElementById("numAlumnos").style.color = "black";

    }

    let sAula = oFormularioAltaGrupo.txtAula.value.trim();
    if (sAula.length == 0 || /^\s+$/.test(sAula)) {
        // alert("Campo vacío, rellénelo");
        bValido = false;
        mensaje += "\nEl campo de aula está vacío.";
        document.getElementById("txtAula").focus();
        document.getElementById("txtAula").style.color = "red";
        
        return false;
    } 
    else
    {
        document.getElementById("txtAula").style.color = "black";
    }

    let sCentro = oFormularioAltaGrupo.txtCentro.value.trim();
    if (sCentro.length == "" || /^\s+$/.test(sCentro)) {
        bValido = false;
        mensaje += "\nDebe rellenar el campo del centro";
        document.getElementById("txtCentro").focus();
        document.getElementById("txtCentro").style.color = "red";
        return false;
    } else {
        document.getElementById("txtCentro").style.color = "black";
    }

 


    if (!bValido) {
        alert(mensaje);
    } else {
    
        //let datosString = $('#frmAltaArticulo').serialize();
        alert($('#formGrupo').serialize());
        $.ajax({
            url: "Ajax/grupos/insertGrupo.php",
            data: $('#formGrupo').serialize(),
            cache: false,
            async: true, // por defecto
            method: "POST",
            success: respuestaAltaTutor
        });
      
        
    }


}

function respuestaAltaTutor(resultado) {
    let datos = JSON.parse(resultado);
    if (datos["error"]) {
        alert(datos["mensaje"]);
    } else {
        alert(datos["mensaje"]);
        formGrupo.reset();
        $("#formGrupo").parent().hide("normal");
    }
}

function limpiarErrores() {
    // frmAltaArticulo.txtIDArticulo.classList.remove("error");
    formTutor.txtDni.classList.remove("error");
    formTutor.txtNombre.classList.remove("error");
    formTutor.txtApellido.classList.remove("error");
    formTutor.txtAsignatura.classList.remove("error");
    // formTutor.txtGrupo.classList.remove("error");
 }


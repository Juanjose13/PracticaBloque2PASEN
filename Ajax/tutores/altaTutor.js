'use strict';

$("#btnAñadeTutor").click(fAceptarAltaTutor);

function fAceptarAltaTutor()
{
    let oFormularioAltaTutor = document.getElementById("formTutor");
    let mensaje = "ERROR:";
    let bValido = true;
    limpiarErrores();

    let sDni = oFormularioAltaTutor.txtDni.value.trim();
    let oVerificaDni = /^\d{8}[A-Z]$/;
    if (!oVerificaDni.test(sDni)) {
        bValido = false;
        mensaje += "\nEl dni es erróneo";
        // alert("Dni Erróneo");
        document.getElementById("txtDni").style.color = "red";
        document.getElementById("txtDni").focus();
        return false;
    } else {
        document.getElementById("txtDni").style.color = "black";
        
    }
    
    let sNombre = oFormularioAltaTutor.txtNombre.value.trim();

    if (sNombre == null || sNombre.length == 0 || /^\s+$/.test(sNombre)) {
        
        // alert("Campo vacío");
        bValido = false;
        mensaje += "\nEl nombre es incorrecto.";
        document.getElementById("txtNombre").style.color = "red";
        document.getElementById("txtNombre").focus();
        
        return false;
    }
    else{
            
        document.getElementById("txtNombre").style.color = "black";

    }

    let sApellidos = oFormularioAltaTutor.txtApellido.value.trim();
    if (sApellidos.length == 0 || /^\s+$/.test(sApellidos)) {
        // alert("Campo vacío, rellénelo");
        bValido = false;
        mensaje += "\nEl apellido es incorrecto.";
        document.getElementById("txtApellido").focus();
        document.getElementById("txtApellido").style.color = "red";
        
        return false;
    } 
    else
    {
        document.getElementById("txtApellido").style.color = "black";
    }

    let sAsignatura = oFormularioAltaTutor.txtAsignatura.value.trim();
    if (sAsignatura.length == "" || /^\s+$/.test(sAsignatura)) {
        bValido = false;
        mensaje += "\nDebe rellenar el campo Asignatura";
        document.getElementById("txtAsignatura").focus();
        document.getElementById("txtAsignatura").style.color = "red";
        return false;
    } else {
        document.getElementById("txtAsignatura").style.color = "black";
    }

 


    if (!bValido) {
        alert(mensaje);
    } else {
    
        //let datosString = $('#frmAltaArticulo').serialize();
        alert($('#formTutor').serialize());
        $.ajax({
            url: "Ajax/tutores/insertTutor.php",
            data: $('#formTutor').serialize(),
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
        frmAltaArticulo.reset();
        $("#formTutor").parent().hide("normal");
    }
}

function limpiarErrores() {
    // frmAltaArticulo.txtIDArticulo.classList.remove("error");
    formTutor.txtDni.classList.remove("error");
    formTutor.txtNombre.classList.remove("error");
    formTutor.txtApellido.classList.remove("error");
    formTutor.txtAsignatura.classList.remove("error");
    formTutor.txtGrupo.classList.remove("error");
 }


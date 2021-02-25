'use strict';
//# sourceURL=altaArticulo.js;
$("#btnAñadeAlumno").click(fAceptarAltaAlumno);


function fAceptarAltaAlumno()
{
    let oFormularioAltaAlumno = document.getElementById("formAlumno");
    let mensaje = "ERROR:";
    let bValido = true;
    limpiarErrores();
    
    //VALIDAR FORMULARIOS -> DNI 11222333A {9 nºs y letra en mayúscula}
    let sDni = oFormularioAltaAlumno.txtDni.value.trim();
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
    
    let sNombre = oFormularioAltaAlumno.txtNombre.value.trim();
    
    if (sNombre == null || sNombre.length == 0 || /^\s+$/.test(sNombre)) {
        
        // alert("Campo vacío");
        bValido = false;
        mensaje += "\nEl nombre es incorrecto.";
        document.getElementById("txtNombre").style.color = "red";
        document.getElementById("txtNombre").focus();
        
        return false;
    } else {
        
        document.getElementById("txtNombre").style.color = "black";
    }
    let sApellidos = oFormularioAltaAlumno.txtApellido.value.trim();
    if (sApellidos.length == 0 || /^\s+$/.test(sApellidos)) {
        // alert("Campo vacío, rellénelo");
        bValido = false;
        mensaje += "\nEl apellido es incorrecto.";
        document.getElementById("txtApellido").focus();
        document.getElementById("txtApellido").style.color = "red";
        
        return false;
    } else {
        document.getElementById("txtApellido").style.color = "black";
    }
    // VALIDAR SOLO NÚMEROS
    let sEdad = oFormularioAltaAlumno.txtEdad.value.trim();
    let oVerificaEdad = /^\d{1,2}$/;
    if (!oVerificaEdad.test(sEdad)) {
        bValido = false;
        mensaje += "\nDebe rellenar el campo EDAD";
        document.getElementById("txtEdad").focus();
        document.getElementById("txtEdad").style.color = "red";
        return false;
    } else {
        document.getElementById("txtEdad").style.color = "black";
    }
   
    if (!bValido) {
        alert(mensaje);
    } else {
    
        //let datosString = $('#frmAltaArticulo').serialize();
        alert($('#formAlumno').serialize());
        $.ajax({
            url: "Ajax/alumnos/insertAlumno.php",
            data: $('#formAlumno').serialize(),
            cache: false,
            async: true, // por defecto
            method: "POST",
            success: respuestaAltaAlumno
        });
      
        
    }
}        
        function respuestaAltaAlumno(resultado) {
        let datos = JSON.parse(resultado);
        if (datos["error"]) {
            alert(datos["mensaje"]);
        } else {
            alert(datos["mensaje"]);
            formAlumno.reset();
            $("#formAlumno").parent().hide("normal");
        }
    }
       
    

    function limpiarErrores() {
        formAlumno.txtDni.classList.remove("error");
        formAlumno.txtNombre.classList.remove("error");
        formAlumno.txtApellido.classList.remove("error");
        formAlumno.txtEdad.classList.remove("error");
        formAlumno.selectGrupo.classList.remove("error");
    }



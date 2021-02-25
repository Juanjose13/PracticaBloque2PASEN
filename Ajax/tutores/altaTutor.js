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
    
        alert($('#formTutor').serialize());
        let txtDni = oFormularioAltaTutor.txtDni.value.trim();
        let txtNombre = oFormularioAltaTutor.txtNombre.value.trim();
        let txtAsignatura = oFormularioAltaTutor.txtAsignatura.value.trim();

        $.post("Ajax/tutores/insertTutor.php", {dni : txtDni, 
                                        nombre : txtNombre, 
                                        asignatura : txtAsignatura, 
                                        },procesarAltaTurismo,"json");
        
    }


}
function procesarAltaTurismo(datos)
{
    if(datos.error == 0)
    {
        alert(datos.mensaje);
        formTutor.reset();
        $("#formTutor").hide();

    }
    else
    {
        alert(datos.mensaje);
    }
}


function limpiarErrores() {
    formTutor.txtDni.classList.remove("error");
    formTutor.txtNombre.classList.remove("error");
    formTutor.txtAsignatura.classList.remove("error");
 }


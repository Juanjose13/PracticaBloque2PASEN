//FUNCION PARA PROBAR INICIO DE SESION
"use strict";
function iniciar()
{
    if (document.getElementById ("txtContraseña").value=='usuario' && document.getElementById("txtCorreo").value=='usuario')
    { 
        navegador.style.display="block";
        document.getElementById("navegador").removeAttribute("hidden");
        document.getElementById("navegador").removeAttribute("hidden");
        // document.getElementById("frmInicio").submit(); 
    } 
    else{ 
         alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
    } 
}


function altaAlumno(){

    divFrmAltaAlumno.style.display="block";
    divFrmAltaAlumno.style.display="none";
    divFrmAltaAlumno.style.display="none";

}
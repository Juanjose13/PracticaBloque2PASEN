//FUNCION PARA PROBAR INICIO DE SESION
"use strict";
function iniciar()
{
    if (document.getElementById ("txtContraseña").value=='usuario' && document.getElementById("txtCorreo").value=='usuario')
    { 
        document.getElementById("navegador").removeAttribute("hidden");
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
    document.getElementById("divFrmAltaAlumno").removeAttribute("hidden");

}
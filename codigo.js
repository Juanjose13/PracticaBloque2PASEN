//FUNCION PARA PROBAR INICIO DE SESION
"use strict";
function empezar(){
    navegador.style.display="none";
    divFrmAltaAlumno.style.display="none";
    divFrmAltaTutor.style.display="none";
    divFrmAltaGrupo.style.display="none";
}
function iniciar()
{
    if (document.getElementById ("txtContraseña").value=='usuario' && document.getElementById("txtCorreo").value=='usuario')
    { 
        navegador.style.display="block";
        divFrmAltaAlumno.style.display="none";
        divFrmAltaTutor.style.display="none";
        divFrmAltaGrupo.style.display="none";
    } 
    else{ 
         alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
    } 
}


function altaAlumno(){

    divFrmAltaAlumno.style.display="block";
    divFrmAltaTutor.style.display="none";
    divFrmAltaGrupo.style.display="none";
    
}

function altaTutor(){
    
    divFrmAltaTutor.style.display="block";
    divFrmAltaAlumno.style.display="none";
    divFrmAltaGrupo.style.display="none";
}

function altaGrupo(){

    divFrmAltaGrupo.style.display="block";
    divFrmAltaAlumno.style.display="none";
    divFrmAltaTutor.style.display="none";
}


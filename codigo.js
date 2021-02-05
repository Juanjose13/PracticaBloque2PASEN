//FUNCION PARA PROBAR INICIO DE SESION
"use strict";
var oPasen = new Pasen();

frmInicio.btnInicio.addEventListener("click", validarLogin, false);

navegador.style.display="none";
divFrmAltaAlumno.style.display="none";
divFrmAltaTutor.style.display="none";
divFrmAltaGrupo.style.display="none";

function validarLogin(){
    let oValidarUsuario = frmInicio.txtCorreo.value.trim();
    let oValidarPass = frmInicio.txtContraseña.value.trim();
    let iniciar=true;

    let expReg = /^([a-zá-ú]{3,})+$/i;
    if(oValidarUsuario == "" || !expReg.test(oValidarPass)){        
        frmInicio.txtCorreo.style.color = "red";
        iniciar=false;   
    }else{
        frmInicio.txtCorreo.style.color = "black";
    }
    
    if(oValidarPass == "" || !expReg.test(oValidarPass)){
        frmInicio.txtContraseña.style.color = "red";
        iniciar=false;
    }else{
        frmInicio.txtContraseña.style.color = "black";
    }
    
    if(iniciar ){
        if(oValidarUsuario=='usuario' && oValidarPass=='usuario'){
            frmInicio.btnInicio.setAttribute("data-dismiss", "modal");
            navegador.style.display="block";
            divFrmAltaAlumno.style.display="none";
            divFrmAltaTutor.style.display="none";
            divFrmAltaGrupo.style.display="none";
            limpiarCampos(frmInicio);
            
        }else{
            
            frmInicio.txtCorreo.style.color = "red";
            frmInicio.txtContraseña.style.color = "red";
            alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 

        }
    }
}

adXmlAlumno();
adXmlTutor();

//CARGA DE LOS XML
function loadXMLDoc(filename) 
{
  let xhttp = null;
  if (window.XMLHttpRequest) 
  {
    xhttp = new XMLHttpRequest();
  } else 
  {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.open("GET", filename, false);
  xhttp.send();
  return xhttp.responseXML;
}

function adXmlAlumno() {
    let datos = loadXMLDoc("alumno.xml");
    console.log(datos);
    datos.querySelectorAll("alumno").forEach(oAlumno => {
      let dni = oAlumno.querySelector("dni").textContent;
      let nombre = oAlumno.querySelector("nombre").textContent;
      let apellido = oAlumno.querySelector("apellido").textContent;
      let edad = oAlumno.querySelector("edad").textContent;
      let grupo = oAlumno.querySelector("grupo").textContent;
      
      oPasen.altaAlumnos(new Alumno(dni, nombre, apellido, edad, grupo));
    });
  }

  function adXmlTutor()
  {
     let datos = loadXMLDoc("tutor.xml");
     datos.querySelectorAll("tutor").forEach(oTutor =>{
         let dni = oTutor.querySelectorAll("dni").textContent;
         let nombre = oTutor.querySelector("nombre").textContent;
         let apellido = oTutor.querySelector("apellido").textContent;
         let asignatura = oTutor.querySelector("asignatura").textContent;
         let grupo = oTutor.querySelector("grupo").textContent;

         oPasen.altaTutor(new Tutor(dni, nombre, apellido, asignatura, grupo));

     });
  }

  //mostrar y ocultar LISTADOS 

function ocultar() 
{
    let divHijos = document
      .querySelector("#contenido")
      .querySelectorAll(".divHijo");
    divHijos.forEach(value =>
         {
      let x = value;
      x.style.display = "none";
    });
  }
  
  function mostrar(x) 
  {
    ocultar();
    document.querySelector(x).style.display = "block";
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

// function validar(){

// }

formAlumno.btnAñadeAlumno.addEventListener("click",añadeAlumno,false);

function añadeAlumno(){
    let oFormularioAltaAlumno = document.getElementById("formAlumno");
    // let oMensajes = document.getElementById("mensajesConductores");
    
    //VALIDAR FORMULARIOS -> DNI 11222333A {9 nºs y letra en mayúscula}
    let sDni = oFormularioAltaAlumno.txtDni.value.trim();
    let oVerificaDni = /^\d{8}[A-Z]$/;
    if(!oVerificaDni.test(sDni)){
        alert("Dni Erróneo");
        document.getElementById("txtDni").style.color= "red";
        document.getElementById("txtDni").focus();
        return false;
    }else{
        document.getElementById("txtDni").style.color= "black";
        
    }
    
    let sNombre = oFormularioAltaAlumno.txtNombre.value.trim();
    
    if(sNombre == null || sNombre.length == 0 || /^\s+$/.test(sNombre)){
        
        alert("Campo vacío");
        document.getElementById("txtNombre").style.color= "red";
        document.getElementById("txtNombre").focus();
        
        return false;
    }else{

        document.getElementById("txtNombre").style.color= "black";
    }
    let sApellidos = oFormularioAltaAlumno.txtApellido.value.trim();
    if(sApellidos.length == 0 || /^\s+$/.test(sApellidos)){
        alert("Campo vacío, rellénelo");
        document.getElementById("txtApellido").focus();
        document.getElementById("txtApellido").style.color= "red";
        
        return false;
    }else{
        document.getElementById("txtApellido").style.color= "black";
    }
    // VALIDAR SOLO NÚMEROS
    let sEdad = oFormularioAltaAlumno.txtEdad.value.trim();
    let oVerificaEdad = /^\d{1,2}$/;
    if(!oVerificaEdad.test(sEdad)){
        alert("Edad Errónea");
        document.getElementById("txtEdad").focus();
        document.getElementById("txtEdad").style.color= "red";
        return false;
    }else{
        document.getElementById("txtEdad").style.color= "black";
    }
    let sGrupo = oFormularioAltaAlumno.txtGrupo.value.trim();
    let oVerificaGrupo = /([A-Z]\1)?$/;
    // let sEdad = oFormularioAltaAlumno.txtEdad.value.trim();
    if(!oVerificaGrupo.test(sGrupo)){
        alert("Seleccione el grupo");
        document.getElementById("txtGrupo").focus();
        document.getElementById("txtGrupo").style.color= "red";
        return false;
    }else{
        document.getElementById("txtGrupo").style.color= "black";
    }
    
    let nuevoAlumno = new Alumno(sDni, sNombre, sApellidos, sEdad, sGrupo);
    
    
    if (oPasen.altaAlumnos(nuevoAlumno)) {
        alert("Alumno Añadido!")
        limpiarCampos(formAlumno);
    } else {
        alert("DNI Repetido!");
    }
    
    
}


//LISTADO ALUMNOS

document
.querySelector("#listadoAlumno")
  .addEventListener("click", listadoAlumnos);
  
  
  function listadoAlumnos()
  {
      
      mostrar("#divMostrarListaAlumnos");
      let tabla = genTablaAlumnos(
          ["DNI", "NOMBRE", "APELLIDOS", "EDAD", "GRUPO",],
          "estaTablaAlumnos");
          
          
          document.querySelector("#divMostrarListaAlumnos").appendChild(tabla);
          oPasen._alumno.forEach(oAlumno =>{if(oAlumno instanceof Alumno)
            document.querySelector("#estaTablaAlumnos").tBodies[0].appendChild(oAlumno.HTMLrow())
            
        });
        
        //miPasteleria.personas.forEach(cliente =>{if(cliente instanceof Cliente)
        
        function genTablaAlumnos(array, id)
        {
            let tabla = document.createElement("TABLE");
            tabla.id = id;
            tabla.classList.add("table");
            let thead = tabla.createTHead();
            let fila = thead.insertRow(-1);
            array.forEach(titulo => {
              thead = fila.insertCell(-1);
              thead.textContent = titulo;
            });
            
            tabla.addEventListener("click", e => {
                let idAlumno;
                if (e.target.tagName == "BUTTON") {
                    idAlumno = e.target.parentNode.parentNode.cells[0].textContent;
                  //oPasen.delCliente(idAlumno);
                  //  e.target.parentNode.parentNode.remove();
                }
            });
            tabla.appendChild(document.createElement("TBODY"));
              return tabla;
            }
            
            

        }
        
        formTutor.btnAñadeTutor.addEventListener("click",añadeTutor,false);
        function añadeTutor()
        {
            
            let oFormularioTutor=document.getElementById("formTutor");
            // let oMensajes = document.getElementById("mensajesConductores");
            
            
            let sDni = oFormularioTutor.txtDni.value.trim();
    let oVerificaDni = /^\d{8}[A-Z]$/;
    if(!oVerificaDni.test(sDni)){
        alert("Dni Erróneo");
        document.getElementById("txtDni").style.color= "red";
        document.getElementById("txtDni").focus();
        return false;
    }else{
        document.getElementById("txtDni").style.color= "black";
        
    }

    let sNombre = oFormularioTutor.txtNombre.value.trim();
    
    if(sNombre == null || sNombre.length == 0 || /^\s+$/.test(sNombre)){
        
        alert("Campo vacío");
        document.getElementById("txtNombre").style.color= "red";
        document.getElementById("txtNombre").focus();
        document.getElementById("txtNombre").style.color= "red";
        
        return false;
    }else{
        document.getElementById("txtNombre").style.color= "black";
    }
    
    let sApellidos = oFormularioTutor.txtApellido.value.trim();
    if(sApellidos.length == 0 || /^\s+$/.test(sApellidos)){
        alert("Campo vacío, rellénelo");
        document.getElementById("txtApellido").focus();
        document.getElementById("txtApellido").style.color= "red";
        
        return false;
    }else{
        document.getElementById("txtApellido").style.color= "black";
    }
    
    

    let sAsignatura = oFormularioTutor.txtAsignatura.value.trim();
    if(sAsignatura.length=="" || /^\s+$/.test(sAsignatura)){
        alert("Asignatura Errónea");
        document.getElementById("txtAsignatura").focus();
        document.getElementById("txtAsignatura").style.color= "red";
        return false;
    }else{
        document.getElementById("txtAsignatura").style.color= "black";
    }
    
    
    let sGrupo = oFormularioTutor.txtGrupo.value.trim();
    let oVerificaGrupo = /([A-Z]\1)?$/;
    // let sEdad = oFormularioAltaAlumno.txtEdad.value.trim();
    if(!oVerificaGrupo.test(sGrupo)){
        alert("Seleccione el grupo");
        document.getElementById("txtGrupo").focus();
        document.getElementById("txtGrupo").style.color= "red";
        return false;
    }else{
        document.getElementById("txtGrupo").style.color= "black";
    }
    
    let nuevoTutor = new Tutor(sDni, sNombre, sApellidos, sAsignatura, sGrupo);
    
        if (oPasen.altaTutor(nuevoTutor)) {
            limpiarCampos(formTutor);
        } else {
            alert("Dni ya utilizado!")
        }
    
        
    
        
    
    }

    //LISTADO TUTOR

    document
.querySelector("#listadoTutor")
  .addEventListener("click", listadoTutores);
  
  
  function listadoTutores()
  {
      
      mostrar("#divMostrarListaTutor");
      let tabla = genTablaTutor(
          ["DNI", "NOMBRE", "APELLIDOS", "ASIGNATURA", "GRUPO",],
          "estaTablaTutor");
          
          
          document.querySelector("#divMostrarListaTutor").appendChild(tabla);
          oPasen._tutor.forEach(oTutor =>{if(oTutor instanceof Tutor)
            document.querySelector("#estaTablaTutor").tBodies[0].appendChild(oTutor.HTMLrow())
            
        });

        function genTablaTutor(array, id)
        {
            let tabla = document.createElement("TABLE");
            tabla.id = id;
            tabla.classList.add("table");
            let thead = tabla.createTHead();
            let fila = thead.insertRow(-1);
            array.forEach(titulo => {
              thead = fila.insertCell(-1);
              thead.textContent = titulo;
            });
            
            tabla.addEventListener("click", e => {
                let idTutor;
                if (e.target.tagName == "BUTTON") {
                    idTutor = e.target.parentNode.parentNode.cells[0].textContent;
                
                }
            });
            tabla.appendChild(document.createElement("TBODY"));
              return tabla;
            }
            
            
        
    }
    
     





    formTutor.btnAñadeGrupo.addEventListener("click",añadeGrupo,false);
    
    function añadeGrupo(){
    let oFormularioGrupo = document.getElementById("formGrupo");
    // let oMensajes = document.getElementById("mensajesConductores");
    
    //VALIDAR FORMULARIOS -> ID 1122 {4 nºs}
    let sId = oFormularioGrupo.txtId.value.trim();
    let oVerificaId = /^\d{4}$/;
    if(!oVerificaId.test(sId)){
        alert("ID Erróneo");
        document.getElementById("txtId").style.color= "red";
        document.getElementById("txtId").focus();
        return false;
    }else{
        document.getElementById("txtId").style.color= "black";
        
    }
    let sGrupo = oFormularioGrupo.txtNombre.value.trim();
    let oVerificaGrupo = /([A-Z]\1)?$/;
    // let sEdad = oFormularioAltaAlumno.txtEdad.value.trim();
    if(!oVerificaGrupo.test(sGrupo)){
        alert("Seleccione el grupo");
        document.getElementById("txtGrupo").focus();
        document.getElementById("txtGrupo").style.color= "red";
        return false;
    }else{
        document.getElementById("txtGrupo").style.color= "black";
    }

    let inumAlumnos = parseInt(oFormularioGrupo.numAlumnos.value.trim());
    let oVerificanAlumno = /^\d{1,2}$/;
    if(!oVerificanAlumno.test(inumAlumnos) || inumAlumnos == null){
        alert("Ningún ha metido ningún número de alumnos");
        document.getElementById("numAlumnos").focus();
        document.getElementById("numAlumnos").style.color= "red";
        return false;
    }else{
        document.getElementById("numAlumnos").style.color= "black";
    }
    
    let sAula = oFormularioGrupo.txtAula.value.trim();
    if(sAsignatura.length=="" || /^([A-Z]\d{3})/.test(sAsignatura)){
        alert("Aula Errónea");
        document.getElementById("txtAula").focus();
        document.getElementById("txtAula").style.color= "red";
        return false;
    }else{
        document.getElementById("txtAula").style.color= "black";
    }
    let sCentro = oFormularioGrupo.txtCentro.value.trim();
    
    
    let nuevoGrupo = new Grupo(sId, sGrupo, inumAlumnos, sAula, sCentro);
    
    
    if (oPasen.altaGrupo(nuevoGrupo)) {
        // oMensajes.innerHTML = "<p style='color:green'>" + "Conductor dado de alta" + "</p>";
        limpiarCampos(formGrupo);
    } else {
        // oMensajes.innerHTML = "<p style='color:red'>" + "Error, el conductor que intenta introducir ya existe" + "</p>";
        alert("Dni ya utilizado!")
    }
    
}


// MENSAJE -> crear un array, -> GENERICO un formulario, selecciones que alumno va o tutor, 
// creo un formulario para enviar oMensajes desde el administrador hacia (tutor o alumno)
//     un select de Alumno (si selecciono un alumno, ponga el select de tutor en blanco)
//     un select de Tutor  (si selecciono un tutor, ponga el select de alumno en blanco)
//     text encabezado
//     text cuerpo del oMensajes

//     para enviar el mensaje ver si se lo envio al alumno o al tutor (la que esta rellene)



function limpiarCampos(form){
    console.log(form);
    form.reset();
}
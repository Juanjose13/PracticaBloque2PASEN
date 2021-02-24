'use strict';
//# sourceURL=altaArticulo.js;
$("#btnMensaje").click(fAceptarAltaMensaje);
// alert("llegó");
// $("#selectPrimero").attr("style","display: none;");
// $("#selectSegundo").attr("style","display: none;");

// $(document).ready(function(){
//     $("#categoria").change(function(){
//         $("#selectPrimero").removeAttr("style","display: none;");
//         $("#categoria").attr("style","display: none;");
//     });
//   });

//   $('select#categoria').on('change',function(){
//     var valor = $(this).val();
//     function select(valor);
    
// });

  
function fAceptarAltaMensaje()
{
    let oFormularioAltaMensaje = document.getElementById("formMensaje");
    let mensaje = "ERROR:";
    let bValido = true;
    limpiarErrores();

    
    alert($('#formMensaje').serialize());
    //VALIDAR FORMULARIOS -> DNI 11222333A {9 nºs y letra en mayúscula}
    let sTitulo = oFormularioAltaMensaje.txtTitulo.value.trim();
    // let oVerificaTitulo = /^{8}[A-Z]$/;
    if (sTitulo == "") {
        bValido = false;
        mensaje += "\nEscriba un Título";
        // alert("Dni Erróneo");
        document.getElementById("txtTitulo").style.color = "red";
        document.getElementById("txtTitulo").focus();
        return false;
    } else {
        document.getElementById("txtTitulo").style.color = "black";
        
    }
    
    let sMensaje = oFormularioAltaMensaje.txtMensaje.value.trim();
    
    if (sMensaje == null || sMensaje.length == 0 || /^\s+$/.test(sMensaje)) {
        
        // alert("Campo vacío");
        bValido = false;
        mensaje += "\nEscriba un mensaje.";
        document.getElementById("txtMensaje").style.color = "red";
        document.getElementById("txtMensaje").focus();
        
        return false;
    } else {
        
        document.getElementById("txtMensaje").style.color = "black";
    }
   
    if (!bValido) {
        alert(mensaje);
    } else {
    
        //let datosString = $('#frmAltaArticulo').serialize();
        $.ajax({
            url: "Ajax/mensajes/insertMensaje.php",
            data: $('#formMensaje').serialize(),
            cache: false,
            async: true, // por defecto
            method: "POST",
            success: respuestaAltaMensaje
        });
      
        
    }
}        
        function respuestaAltaMensaje(resultado) {
        let datos = JSON.parse(resultado);
        if (datos["error"]) {
            alert(datos["mensaje"]);
        } else {
            alert(datos["mensaje"]);
            formMensaje.reset();
            $("#formMensaje").parent().hide("normal");
        }
    }
       
    

    function limpiarErrores() {
        formMensaje.txtTitulo.classList.remove("error");
        formMensaje.txtMensaje.classList.remove("error");
    }



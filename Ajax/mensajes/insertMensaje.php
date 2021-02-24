<?php

//PARA INSERTAR MENSAJES

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "pasen";
$usuario   = "root";
$password  = "";

$primero = $_POST["selectPrimero"];
$segundo = $_POST["selectSegundo"];
$titulo = $_POST["txtTitulo"];
$mensaje = $_POST["txtMensaje"];


// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_query($conexion,"utf8");

// Abtengo los ID de los seleccionados
$sql2 = "SELECT tutores.nombreTutor as tutor, alumnos.nombreAlumno as alumno from tutores,alumnos WHERE tutores.idTutor= $primero AND alumnos.idAlumno=$segundo";
$resultSet = mysqli_query($conexion,$sql2);
while($fila = mysqli_fetch_assoc($resultSet)){
    extract($fila);
    // echo "<pre>";
    // print_r($fila);
    // echo "</pre>";

    // echo $tutor;
    // echo $alumno;
}

// Consulta SQL para obtener los datos de los centros.
$sql = "INSERT INTO mensajes (nombreEmisor, nombreReceptor, tituloMensaje, contenidoMensaje,idTutorFK, idAlumnoFK) VALUES ('$tutor','$alumno','$titulo','$mensaje',$primero,$segundo)";

$resultado = mysqli_query($conexion,$sql);

if ($resultado){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Mensaje enviado"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el envio de mensaje: ".mysqli_error($conexion);
}
mysqli_close($conexion);


echo json_encode($respuesta);

?>
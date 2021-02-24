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

// Consulta SQL para obtener los datos de los centros.
// $sql = "INSERT INTO alumnos (dniAlumno, nombreAlumno, apellido, edad) VALUES ($dni,'$nombre','$apellido',$edad);";
// $resultado = mysqli_query($conexion,$sql);

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
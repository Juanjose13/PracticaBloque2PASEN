<?php
////////////////// INSERTAR TUTORES

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "pasen";
$usuario   = "root";
$password  = "";

// $dani = dni alumno;
// $nombre = nombre del alumno;
// $apellido = apellidos alumnos;
// $edad = edad ;
$dni = $_POST["txtDni"];
$nombre = $_POST["txtNombre"];
$asignatura = $_POST["txtAsignatura"];


// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_query($conexion,"utf8");

// Consulta SQL para obtener los datos de los centros.
$sql = "INSERT INTO tutores (dniTutor, nombreTutor, asignatura) VALUES ('$dni','$nombre','$asignatura');";
$resultado = mysqli_query($conexion,$sql);

if ($resultado){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Alta realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de alta: ".mysqli_error($conexion);
}
mysqli_close($conexion);


echo json_encode($respuesta);
?>
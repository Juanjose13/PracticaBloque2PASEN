<?php
//PARA INSERTAR ALUMNOS

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "pasen";
$usuario   = "root";
$password  = "";

$dni = $_POST["dni"];
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$edad = $_POST["edad"];

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_query($conexion,"utf8");

// Consulta SQL para obtener los datos de los centros.
$sql = "INSERT INTO alumnos (dniAlumno, nombreAlumno, apellido, edad) VALUES ($dni,'$nombre','$apellido',$edad);";
echo $sql;
// $resultado = mysqli_query($conexion,$sql);

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
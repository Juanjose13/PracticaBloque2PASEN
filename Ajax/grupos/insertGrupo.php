<?php
$servidor  = "localhost";
$basedatos = "pasen";
$usuario   = "root";
$password  = "";


$grupo = $_POST["txtGrupo"];
$numAlumnos = $_POST["numAlumnos"];
$aula = $_POST["txtAula"];
$centro = $_POST["txtCentro"];


// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_query($conexion,"utf8");

// Consulta SQL para obtener los datos de los centros.
$sql = "INSERT INTO grupos (grupo, nAlumnos, aula, centro) VALUES ('$grupo',$numAlumnos,'$aula','$centro')";

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
<?php

////// BUSCAR Alumnos

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "pasen";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_query($conexion,"utf8");

// CONSULTA GENERICA DE LA TABLA "alumnos"
$sql = "SELECT * FROM alumnos";
$resultado = mysqli_query($conexion, $sql);

////// DEVUELVE JSON 
echo json_encode($resultado);

?>
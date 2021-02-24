<?php
// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "pasen";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");
mysqli_query($conexion,"utf8");

$sql = "SELECT idAlumno, dniAlumno, nombreAlumno, apellido, edad FROM alumnos";
$resultado = mysqli_query($conexion,$sql);

$XML ='<?xml version="1.0" encoding="UTF-8"?>';
$XML .='<datos>';

while ($fila = mysqli_fetch_assoc($resultado))
 {
    $XML .='<alumnos>';
        $XML .='<idAlumno>'.$fila["idAlumno"].'</idAlumno>';
        $XML .='<dniAlumno>'.$fila["dniAlumno"].'</dniAlumno>';
        $XML .='<nombreAlumno>'.$fila["nombreAlumno"].'</nombreAlumno>';
        $XML .= '<apellido>'.$fila["apellido"].'</apellido>';
        $XML .='<edad>'.$fila["edad"].'</edad>';
    $XML .='</alumnos>';
}

$XML .='</datos>';

// Cabecera de respuesta indicando que el contenido de la respuesta es XML
header("Content-Type: text/xml");
// Para que el navegador no haga cache de los datos devueltos por la página PHP.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


echo $XML;

mysqli_close($conexion);

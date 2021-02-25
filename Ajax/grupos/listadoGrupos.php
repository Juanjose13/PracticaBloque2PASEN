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

$sql = "SELECT idGrupo, grupo, nAlumnos, aula, centro FROM grupos";
$resultado = mysqli_query($conexion,$sql);

$XML ='<?xml version="1.0" encoding="UTF-8"?>';
$XML .='<datos>';

while ($fila = mysqli_fetch_assoc($resultado))
 {
    $XML .='<grupos>';
        $XML .='<idGrupo>'.$fila["idGrupo"].'</idGrupo>';
        $XML .='<grupo>'.$fila["grupo"].'</grupo>';
        $XML .='<nAlumnos>'.$fila["nAlumnos"].'</nAlumnos>';
        $XML .= '<aula>'.$fila["aula"].'</aula>';
        $XML .='<centro>'.$fila["centro"].'</centro>';
    $XML .='</grupos>';
}

$XML .='</datos>';

// Cabecera de respuesta indicando que el contenido de la respuesta es XML
header("Content-Type: text/xml");
// Para que el navegador no haga cache de los datos devueltos por la página PHP.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


echo $XML;

mysqli_close($conexion);

?>
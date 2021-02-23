<?php
//PARA INSERTAR ALUMNOS

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "pasen";
$usuario   = "root";
$password  = "";

$dni = $_POST["txtDni"];
$nombre = $_POST["txtNombre"];
$apellido = $_POST["txtApellido"];
$edad = $_POST["txtEdad"];
$idGrupo = $_POST["selectGrupo"];

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_query($conexion,"utf8");

// Consulta SQL para meter tabla Alumno.
$sql = "INSERT INTO alumnos (dniAlumno, nombreAlumno, apellido, edad) VALUES ('$dni','$nombre','$apellido',$edad)";
// echo $sql;
$resultado = mysqli_query($conexion,$sql);

$id="SELECT MAX(idAlumno) AS id FROM alumnos";
$resultado3 = mysqli_query($conexion,$id);
while ($row = $resultado3->fetch_assoc()) {
    $sql2 = "INSERT INTO gruposalumnos (idAlumnoFK,idGrupoFK) VALUES ($row,$idGrupo)";
}
$resultado2 = mysqli_query($conexion,$sql2);

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
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
$sqlSelect = "SELECT idGrupo as idgrupo, grupo FROM grupos";

$resultado = mysqli_query($conexion, $sqlSelect);
$listadoGrupo=[];
while($fila = mysqli_fetch_assoc($resultado))
{
    $listadoGrupo[] = $fila;

}

$combo = [];
foreach($listadoGrupo as $key => $value){
    array_push($combo,$value);
}
// echo "<pre>";
// print_r($combo);
// echo "</pre>";
// mysqli_close($conexion);
echo json_encode($combo);
/*
 *****************   SQL PARA SACAR COSAS DEL GRUPO + NOMBRE DEL TUTOR QUE TIENE ESE GRUPO  *******************************************
SELECT grupos.grupo, grupos.aula, grupos.nAlumnos,grupos.centro, tutores.nombreTutor FROM grupos 
inner join tutores on tutores.idTutor = grupos.idTutorFK 
WHERE idTutorFK = 1
********************************************************************************************************************************************
*/

/*
**************************** SQL PARA SACAR LOS ALUMNOS QUE ESTÁN MATRICULADOS EN UN GRUPO Y EN QUE CENTRO **********************************
SELECT grupos.grupo, grupos.centro, alumnos.nombreAlumno, alumnos.apellido, alumnos.edad FROM gruposalumnos 
INNER JOIN alumnos ON gruposalumnos.idAlumnoFK = alumnos.idAlumno
INNER JOIN grupos ON gruposalumnos.idGrupoFK = grupos.idGrupo
where grupos.idGrupo = 1
*******************************************************************************************************************************************
*/

////// DEVUELVE JSON 
?>
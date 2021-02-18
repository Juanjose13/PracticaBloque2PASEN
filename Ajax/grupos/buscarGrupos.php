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
$sql = "SELECT * FROM grupos";

/*
 *****************   SQL PARA SACAR COSAS DEL GRUPO + NOMBRE DEL TUTOR QUE TIENE ESE GRUPO  *******************************
SELECT grupos.grupo, grupos.aula, grupos.nAlumnos,grupos.centro, tutores.nombreTutor FROM grupos 
inner join tutores on tutores.idTutor = grupos.idTutorFK 
WHERE idTutorFK = 1
*********************************************************************************************************************************
*/

/*
**************************** SQL PARA SACAR LOS ALUMNOS QUE ESTÁN MATRICULADOS EN UN GRUPO Y EN QUE CENTRO ********************
SELECT grupos.grupo, grupos.centro, alumnos.nombreAlumno, alumnos.apellido, alumnos.edad FROM gruposalumnos 
INNER JOIN alumnos ON gruposalumnos.idAlumnoFK = alumnos.idAlumno
INNER JOIN grupos ON gruposalumnos.idGrupoFK = grupos.idGrupo
where grupos.idGrupo = 1
***********************************************************************************************************************************
*/
$resultado = mysqli_query($conexion, $sql);

////// DEVUELVE JSON 
echo json_encode($resultado);
?>
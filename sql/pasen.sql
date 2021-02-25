-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-02-2021 a las 20:51:07
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pasen`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `idAlumno` int(11) NOT NULL,
  `dniAlumno` varchar(9) DEFAULT NULL,
  `nombreAlumno` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`idAlumno`, `dniAlumno`, `nombreAlumno`, `apellido`, `edad`) VALUES
(1, '57342062D', 'Pedro', 'Gutierrez', 15),
(2, '14525412A', 'Juan', 'Moreno', 18),
(3, '89745621C', 'Lopera', 'Betis', 20),
(4, '78945631L', 'Maria', 'Macias', 25),
(5, '96325749M', 'Marcos', 'Acevedo', 22),
(6, '32145678K', 'Domingo', 'Desert', 23),
(7, '12314547A', 'Acevedo', 'Warfare', 21),
(8, '98745632N', 'Alvaro', 'Walker', 30),
(9, '11222333D', 'Alvaro', 'Jota', 12),
(10, '23456789V', 'Chasquito', 'Manco', 3),
(11, '11222333D', 'lalalal', 'jajaj', 34),
(12, '23456789C', 'Alvaro', 'jaja', 3),
(13, '32456587D', 'alalal', 'sda', 34),
(14, '23342356B', 'Acevedo', 'Manco', 3),
(21, '67239187S', 'kakaka', 'kaskdlask', 3),
(22, '78459696A', 'Lolo', 'García', 12),
(23, '78459696A', 'Lolo', 'García', 12),
(24, '78451278C', 'Juan José', 'Acevedo', 22),
(25, '23543214C', 'Alvaro', 'columbiaaa', 3),
(26, '63728192C', 'akakak', 'jajaja', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`
--

CREATE TABLE `grupos` (
  `idGrupo` int(11) NOT NULL,
  `grupo` varchar(1) DEFAULT NULL,
  `nAlumnos` int(11) DEFAULT NULL,
  `aula` varchar(12) DEFAULT NULL,
  `centro` varchar(45) DEFAULT NULL,
  `idTutorFK` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `grupos`
--

INSERT INTO `grupos` (`idGrupo`, `grupo`, `nAlumnos`, `aula`, `centro`, `idTutorFK`) VALUES
(1, 'A', 25, 'Mediana', 'Hermanos Machado', 1),
(2, 'B', 30, 'Grande', 'Lucus Solis', 2),
(3, 'C', 20, 'Pequeña', 'Martinez Montañes', 3),
(4, 'D', 15, 'Pequeña', 'Grupo Studium', 4),
(5, 'E', 26, 'Mediana', 'Vistazul', 2),
(6, 'F', 56, 'Grande', 'Virgen Rosario', NULL),
(7, 'G', 10, 'Pequeña', 'Virgen María', NULL),
(8, 'H', 56, 'Grande', 'Hnos Machado', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gruposalumnos`
--

CREATE TABLE `gruposalumnos` (
  `idGrupoAlumno` int(11) NOT NULL,
  `idAlumnoFK` int(11) DEFAULT NULL,
  `idGrupoFK` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `gruposalumnos`
--

INSERT INTO `gruposalumnos` (`idGrupoAlumno`, `idAlumnoFK`, `idGrupoFK`) VALUES
(1, 8, 4),
(2, 6, 2),
(3, 1, 2),
(4, 2, 5),
(5, 3, 1),
(6, 4, 3),
(7, 5, 5),
(8, 7, 1),
(9, 21, 2),
(10, 23, 1),
(14, 24, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `idMensaje` int(11) NOT NULL,
  `nombreEmisor` varchar(45) DEFAULT NULL,
  `nombreReceptor` varchar(45) DEFAULT NULL,
  `tituloMensaje` varchar(45) DEFAULT NULL,
  `contenidoMensaje` varchar(280) DEFAULT NULL,
  `idTutorFK` int(11) DEFAULT NULL,
  `idAlumnoFK` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`idMensaje`, `nombreEmisor`, `nombreReceptor`, `tituloMensaje`, `contenidoMensaje`, `idTutorFK`, `idAlumnoFK`) VALUES
(1, 'Javier', 'Acevedo', 'Prueba', 'Probando los mensajes', 2, 7),
(2, 'Javier', 'Acevedo', 'Prueba', 'Probando los mensajes', 2, 7),
(3, 'Inma', 'Alvaro', 'Prueba', 'Probando', 4, 9),
(4, 'Javier', 'Domingo', 'Prueba', 'Probando', 2, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tutores`
--

CREATE TABLE `tutores` (
  `idTutor` int(11) NOT NULL,
  `dniTutor` varchar(9) DEFAULT NULL,
  `nombreTutor` varchar(45) DEFAULT NULL,
  `asignatura` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tutores`
--

INSERT INTO `tutores` (`idTutor`, `dniTutor`, `nombreTutor`, `asignatura`) VALUES
(1, '12345678A', 'Carlos', 'Cliente'),
(2, '98765432C', 'Javier', 'Diseño'),
(3, '36985214M', 'Juan', 'Servidor'),
(4, '14785236L', 'Inma', 'Sistemas'),
(5, '85236975', 'Maria', 'Programacion'),
(6, '78451245C', 'Alvaro', 'Historia'),
(8, '65723456Y', 'Lolo', 'jajaa'),
(15, '34253412V', 'Domingo', 'Programacion');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`idAlumno`);

--
-- Indices de la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD PRIMARY KEY (`idGrupo`),
  ADD KEY `idTutorFK1_idx` (`idTutorFK`);

--
-- Indices de la tabla `gruposalumnos`
--
ALTER TABLE `gruposalumnos`
  ADD PRIMARY KEY (`idGrupoAlumno`),
  ADD KEY `idAlumnoFK3_idx` (`idAlumnoFK`),
  ADD KEY `idGrupoFK4_idx` (`idGrupoFK`);

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`idMensaje`),
  ADD KEY `idTutorFK5_idx` (`idTutorFK`),
  ADD KEY `idAlumnoFK6_idx` (`idAlumnoFK`);

--
-- Indices de la tabla `tutores`
--
ALTER TABLE `tutores`
  ADD PRIMARY KEY (`idTutor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `idAlumno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `grupos`
--
ALTER TABLE `grupos`
  MODIFY `idGrupo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `gruposalumnos`
--
ALTER TABLE `gruposalumnos`
  MODIFY `idGrupoAlumno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `idMensaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tutores`
--
ALTER TABLE `tutores`
  MODIFY `idTutor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD CONSTRAINT `idTutorFK1` FOREIGN KEY (`idTutorFK`) REFERENCES `tutores` (`idTutor`);

--
-- Filtros para la tabla `gruposalumnos`
--
ALTER TABLE `gruposalumnos`
  ADD CONSTRAINT `idAlumnoFK3` FOREIGN KEY (`idAlumnoFK`) REFERENCES `alumnos` (`idAlumno`),
  ADD CONSTRAINT `idGrupoFK4` FOREIGN KEY (`idGrupoFK`) REFERENCES `grupos` (`idGrupo`);

--
-- Filtros para la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD CONSTRAINT `idAlumnoFK6` FOREIGN KEY (`idAlumnoFK`) REFERENCES `alumnos` (`idAlumno`),
  ADD CONSTRAINT `idTutorFK5` FOREIGN KEY (`idTutorFK`) REFERENCES `tutores` (`idTutor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

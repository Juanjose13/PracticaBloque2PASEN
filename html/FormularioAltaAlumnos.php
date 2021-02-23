<!-- <div id="divFrmAltaAlumno" display="none" class="container col-6 "> -->
    <form action="" name="formAlumno" class="m-2" id="formAlumno">
        <h1>Formulario Alumno</h1>
        <div class="form-group row">
            <label for="txtDni" class="col-4 col-form-label">DNI:</label>
            <div class="col-8">
                <input id="txtDni" name="txtDni" type="text" class="form-control" placeholder="11222333A">
            </div>
        </div>
        <div class="form-group row">
            <label for="txtNombre" class="col-4 col-form-label">Nombre:</label>
            <div class="col-8">
                <input id="txtNombre" name="txtNombre" type="text" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label for="txtApellido" class="col-4 col-form-label">Apellidos:</label>
            <div class="col-8">
                <input id="txtApellido" name="txtApellido" type="text" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label for="txtEdad" class="col-4 col-form-label">Edad:</label>
            <div class="col-8">
                <input id="txtEdad" name="txtEdad" type="text" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label for="txtGrupo" class="col-4 col-form-label">Grupo:</label>
            <div class="col-8">
                <select class="form-control" id="selectGrupo" name="selectGrupo" required="">
                    <!-- <option selected value ="0">Seleccione una</option> -->
                                <?php
            // Realizamos la consulta para extraer los datos
            $conexion = mysqli_connect("localhost", "root", "","pasen") or die(mysqli_error($conexion));
            $sqlSelect = "SELECT idGrupo, grupo FROM grupos";
                mysqli_query($conexion,"utf8");
                $resultado = mysqli_query($conexion, $sqlSelect);
                    while ($valores = mysqli_fetch_array($resultado)) {
            // En esta sección estamos llenando el select con datos extraidos de una base de datos.
                        echo '<option value="'.$valores["idGrupo"].'">'.$valores["grupo"].'</option>';
                    }
                  ?>

                </select>
                
                <!-- <input id="txtGrupo" name="txtGrupo" type="text" class="form-control"> -->
            </div>
        </div>
        <div class="form-group row">
            <div class="offset-4 col-8">
                <button type="button" name="btnAñadeAlumno" id="btnAñadeAlumno" class="btn btn-primary">Añadir</button>
            </div>
        </div>
    </form>
<!-- </div> -->
<!-- <div id="contenido">
    <div id="divMostrarListaAlumnos" class="col-8 m-auto divHijo" style="display: none;">
        <input id="buscar" type="text" onkeyup="buscaNombre()" placeholder="Busqueda por nombre ..." />
        <a href="#"><img class="search-icon" width="50px" height="50px" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" /></a>
    </div>
    
</div> -->
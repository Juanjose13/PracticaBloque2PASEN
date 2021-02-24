<!-- <div id="divFrmAltaGrupo" display="none" class="container col-6 "> -->
   
    <form name="formGrupo" class="m-2" id="formGrupo">
        <h1>Formulario Grupo</h1>
        <!-- <div class="form-group row">
            <label for="txtId" class="col-4 col-form-label">ID Grupo:</label>
            <div class="col-8">
                <input id="txtId" name="txtId" type="text" class="form-control">
            </div>
        </div> -->
        <div class="form-group row">
            <label for="txtGrupo" class="col-4 col-form-label">Grupo:</label>
            <div class="col-8">
                <input id="txtGrupo" name="txtGrupo" type="text" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label for="numAlumnos" class="col-4 col-form-label">Nº alumnos:</label>
            <div class="col-8">
                <input id="numAlumnos" name="numAlumnos" type="number" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label for="txtAula" class="col-4 col-form-label">Aula:</label>
            <div class="col-8">
                <input id="txtAula" name="txtAula" type="text" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label for="txtCentro" class="col-4 col-form-label">Centro:</label>
            <div class="col-8">
                <input id="txtCentro" name="txtCentro" type="text" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label for="selectGrupo" class="col-4 col-form-label">Asignar Tutor:</label>
            <div class="col-8">
            <select class="form-control" id="selectGrupo" name="selectGrupo" required="">
                <?php
                // Realizamos la consulta para extraer los datos
                $conexion = mysqli_connect("localhost", "root", "","pasen") or die(mysqli_error($conexion));
                $sqlSelect = "SELECT idTutor, nombreTutor FROM tutores";
                    mysqli_query($conexion,"utf8");
                    $resultado = mysqli_query($conexion, $sqlSelect);
                        while ($valores = mysqli_fetch_array($resultado)) {
                // En esta sección estamos llenando el select con datos extraidos de una base de datos.
                            echo '<option value="'.$valores["idTutor"].'">'.$valores["nombreTutor"].'</option>';
                        }


                ?>
                </select>
            </div>
        </div>
        <div class="form-group row">
            <div class="offset-4 col-8">
                <button name="btnAñadeGrupo" id="btnAñadeGrupo" type="button" class="btn btn-primary">Añadir</button>
            </div>
        </div>
    </form>
<!-- </div> -->
<!-- <div id="contenido">
    <div id="divMostrarListaGrupo" class="col-8 m-auto divHijo" style="display: none;">
        
    </div>
    
</div> -->
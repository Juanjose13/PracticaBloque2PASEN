<!-- <div id="divFrmAltaMensaje" display="none" class="container col-6 "> -->
    <form action="" class="m-2" name="formMensaje" id="formMensaje">
        <h2>Mensajes </h2>
        <div class="form-group">
            <label for="selectPrimero" class="control-label col-xs-4">Remitente</label>
           
           
            <div class="col-xs-8">
                <select id="selectTutor" name="selectPrimero" class="select form-control" required="required">
              <option value="0" selected>Seleccione una persona...</option>
              <?php
           
              // Realizamos la consulta para extraer los datos
              $conexion = mysqli_connect("localhost", "root", "","pasen") or die(mysqli_error($conexion));

              $sqlSelect = "SELECT tutores.idTutor as id, tutores.nombreTutor as nombre from tutores";
              mysqli_query($conexion,"utf8");
              $resultado = mysqli_query($conexion, $sqlSelect);
              foreach ($resultado as $key => $valores) {
                  // En esta sección estamos llenando el select con datos extraidos de una base de datos.
                  echo '<option value="'.$valores["id"].'">'.$valores["nombre"].'</option>';
                }
                
                
                ?>
            </select>
            
        </div>
    </div>
    <div class="form-group">
        <label for="selectSegundo" class="control-label col-xs-4">Destinatario</label>
        <div class="col-xs-8">
            <select id="selectSegundo" name="selectSegundo" class="select form-control" required="required">
                <option value="0" selected>Seleccione una persona...</option>
                <?php
                $sqlSelect2 = "SELECT alumnos.idAlumno as id, alumnos.nombreAlumno as nombre from alumnos";
                $resultado2 = mysqli_query($conexion, $sqlSelect2);
                     foreach ($resultado2 as $key => $valores2) {
                        // En esta sección estamos llenando el select con datos extraidos de una base de datos.
                                    echo '<option value="'.$valores2["id"].'">'.$valores2["nombre"].'</option>';
                                }
                    ?>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label for="text" class="control-label col-xs-4">Asunto</label>
            <div class="col-xs-8">
                <input id="txtTitulo" name="txtTitulo" type="text" class="form-control" required="required">
            </div>
        </div>
        <div class="form-group">
            <label for="textarea" class="control-label col-xs-4">Mensaje</label>
            <div class="col-xs-8">
                <textarea id="txtMensaje" name="txtMensaje" cols="40" rows="5" class="form-control" required="required"></textarea>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-offset-4 col-xs-8">
                <button name="btnMensaje" id="btnMensaje" type="button" class="btn btn-primary">Enviar</button>
            </div>
        </div>
    </form>
<!-- </div> -->
<!-- <div id="contenido">
    <div id="divMostrarListaMensaje" class="col-8 m-auto divHijo" style="display: none;">
        <h2>Listado de los mensajes enviados</h2>
        
    </div>
    
</div> -->

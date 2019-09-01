<?php

include './GlobalConfig.php';
$status=0;
$Result=array();
$idMateria = $_POST['id_Materia'];

$query = "select evento.* 
			from tbl_materia as materia, tbl_evento as evento
			where evento.id_Materia=materia.id AND materia.id=" . $idMateria . " AND evento.dt_Fecha>=now()";

$resultado = mysqli_query($strConexion, $query) or die("Se presento un problema al intentar consultar los eventos del curso.");

if(mysqli_num_rows($resultado) > 0){

    while ($row = mysqli_fetch_assoc($resultado)) {
        $status=1;
        $Result[]=$row;
    }
}
else
{
    $status=0;
    $Result[]="No se encontraron eventos registrados al curso.";
}

$jsonResult = ['Code' => $status, 'Result' => $Result];
print json_encode($jsonResult, JSON_UNESCAPED_UNICODE);

?>
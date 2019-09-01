<?php

include './GlobalConfig.php';
$status=0;
$Result=array();
$idEvento = $_POST['id_Evento'];
$idEstudiante = $_POST['id_Estudiante'];

$query = "INSERT INTO tbl_eventoestudiante (id_Evento, id_Estudiante) VALUES (".$idEvento.", ".$idEstudiante.")";

if ($strConexion->query($query) === TRUE) {
    $status=1;
    $Result[]="Se registro tu asistencia satisfactoriamente.";
} else {
    $status=0;
    $Result[]="No se pudo registrar tu asistencia, por favor comunicate con el administrador.";
}

$strConexion->close();

$jsonResult = ['Code' => $status, 'Result' => $Result];
print json_encode($jsonResult, JSON_UNESCAPED_UNICODE);

?>
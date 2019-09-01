<?php
header("Access-Control-Allow-Origin: *");
include './GlobalConfig.php';

$postdata = file_get_contents("php://input");
$datos=json_decode($postdata, true);

$status=0;
$Result=array();
$idMateria = $datos['id_Materia'];
$idUsuario = $datos['id_Usuario'];
$vcFoto = $datos['vc_Foto'];
$vcDescripcion = $datos['vc_Descripcion'];

$query = "INSERT INTO tbl_novedad (dt_Fecha, vc_Descripcion, bit_Estado, id_Materia, id_Usuario, vc_Foto) 
		VALUES (now(), '".$vcDescripcion."',1,".$idMateria.",".$idUsuario.",'".$vcFoto."')";

if ($strConexion->query($query) === TRUE) {
    $status=1;
    $Result[]="Se registro tu novedad satisfactoriamente.";
} else {
    $status=0;
    $Result[]="No se pudo registrar tu novedad, por favor comunicate con el administrador.";
}

$strConexion->close();

$jsonResult = ['Code' => $status, 'Result' => $Result];
print json_encode($jsonResult, JSON_UNESCAPED_UNICODE);

?>
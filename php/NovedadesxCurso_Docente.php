<?php
header("Access-Control-Allow-Origin: *");
include './GlobalConfig.php';

$postdata = file_get_contents("php://input");
$datos=json_decode($postdata, true);

$status=0;
$Result=array();
$idMateria = $datos;

$query = "select novedad.* 
			from tbl_user as user, tbl_materia as materia, tbl_materiaestudiante as me, tbl_novedad novedad 
			where materia.id=" . $idMateria . " AND materia.bit_Estado=1 AND novedad.bit_Estado=1 AND materia.id=novedad.id_Materia group by novedad.id";

$resultado = mysqli_query($strConexion, $query) or die("Se presento un problema al intentar consultar las novedades de la materia.");

if(mysqli_num_rows($resultado) > 0){

    while ($row = mysqli_fetch_assoc($resultado)) {
        $status=1;
        $Result[]=$row;
    }
}
else
{
    $status=0;
    $Result[]="No se encontraron novedades registradas a este curso.";
}

$jsonResult = ['Code' => $status, 'Result' => $Result];
print json_encode($jsonResult, JSON_UNESCAPED_UNICODE);

?>
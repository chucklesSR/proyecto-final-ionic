<?php
header("Access-Control-Allow-Origin: *");
include './GlobalConfig.php';

$postdata = file_get_contents("php://input");
$datos=json_decode($postdata, true);

$status=0;
$Result=array();
$idMateria = $datos;

$query = "select user.* 
			from tbl_user as user, tbl_materia as materia, tbl_materiaestudiante as me 
			where me.id_Materia=materia.id AND me.id_Estudiante=user.id AND materia.id=" . $idMateria . " AND user.bit_Estado=1";

$resultado = mysqli_query($strConexion, $query) or die("Se presento un problema al intentar consultar los estudiantes.");

if(mysqli_num_rows($resultado) > 0){

    while ($row = mysqli_fetch_assoc($resultado)) {
        $status=1;
        $Result[]=$row;
    }
}
else
{
    $status=0;
    $Result[]="No se encontraron estudiantes activos para este curso.";
}

$jsonResult = ['Code' => $status, 'Result' => $Result];
print json_encode($jsonResult, JSON_UNESCAPED_UNICODE);

?>
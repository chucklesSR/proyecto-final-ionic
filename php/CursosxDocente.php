<?php
header("Access-Control-Allow-Origin: *");
include './GlobalConfig.php';

$postdata = file_get_contents("php://input");
$datos=json_decode($postdata, true);

$status=0;
$Result=array();
$idDocente = $datos;

$query = "select materia.* 
			from tbl_user as user, tbl_materia as materia 
			where user.id=materia.id_Docente AND user.id=" . $idDocente . " AND user.bit_Estado=1 AND materia.bit_Estado=1 
			AND materia.dt_FechaInicio<=now() AND materia.dt_FechaFin>=now()";

$resultado = mysqli_query($strConexion, $query) or die("Se presento un problema al intentar consultar las materias.");

if(mysqli_num_rows($resultado) > 0){
	
    while ($row = mysqli_fetch_assoc($resultado)) {
        $status=1;
        $Result[]=$row;
    }
}
else
{
    $status=0;
    $Result[]="No se encontraron materias activas para el docente";
}

$jsonResult = ['Code' => $status, 'Result' => $Result];
print json_encode($jsonResult, JSON_UNESCAPED_UNICODE);

?>
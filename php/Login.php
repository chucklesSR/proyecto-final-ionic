<?php
header("Access-Control-Allow-Origin: *");
include './GlobalConfig.php';

$postdata = file_get_contents("php://input");
$datos=json_decode($postdata, true);

$status=0;
$Result=array();
$strUserName = $datos['txtUserName'];
$strPassword = $datos['txtPassword'];

$query = "select id, vc_Nombre, vc_Apellido, vc_Documento, vc_Facultad
    , vc_Programa, vc_Rol from tbl_user where vc_Usuario='" . $strUserName . "' and vc_Contrasenia='" . $strPassword . "'
 and bit_Estado=1";

$resultado = mysqli_query($strConexion, $query) or die("Se presento un problema al intentar consultar el usuario.");

if(mysqli_num_rows($resultado) > 0){

    while ($row = mysqli_fetch_assoc($resultado)) {
        $status=1;
        $Result[]=$row;
    }
}
else
{
    $status=0;
    $Result[]="Usuario o contraeña incorrectos, por favor valide los datos ingresados";
}

$jsonResult = ['Code' => $status, 'Result' => $Result];
print json_encode($jsonResult, JSON_UNESCAPED_UNICODE);


?>
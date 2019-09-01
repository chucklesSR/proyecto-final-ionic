<?php
$Url="localhost";
$User="root";
$Password="";
$DataBase="proyectomoviles";

$strConexion = mysqli_connect($Url, $User, $Password) or die("Error al intentar conectarse a la base de datos");

if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$db = mysqli_select_db($strConexion, $DataBase);

?>
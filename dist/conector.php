<?php
//$conexion = mysqli_init();
//if (!$conexion) {
//    die('mysqli_init failed');
//}
//$conexion->real_connect('localhost', 'root', '', 'caja_registradora','3306',NULL,MYSQLI_CLIENT_SSL); 
$conexion = new mysqli('localhost', 'root', '', 'caja_registradora');    
    
?>
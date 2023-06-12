<?php
header('Content-Type: application/json');
include 'conector.php';

$consulta = "select * from caja_registradora.inventario;";
if (!$resultado = $conexion->query($consulta)) {
    echo ('Noo');
    exit;
}


$query = $conexion->query($consulta);
$data = array();
if($query->num_rows > 0){
    while ($fila = $resultado->fetch_assoc()) {
        $data[] = $fila;
    }
}else{
    $data[] = 'err';
}

echo json_encode($data);


$resultado->free(); 
$conexion->close();
?>
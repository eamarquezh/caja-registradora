<?php
header('Content-Type: application/json');
include 'conector.php';

$id_producto = $_REQUEST['id_producto'];

sleep(1);
$consulta = "select * from caja_registradora.inventario where id_producto like '%$id_producto%' or producto_a like '%$id_producto%';";
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
<?php
header('Content-Type: application/json');
include 'conector.php';

$id_producto = $_REQUEST['id_producto'];

$consulta = "DELETE FROM caja_registradora.inventario
WHERE id_producto = '$id_producto';";
if (!$resultado = $conexion->query($consulta)) {
    echo ('Noo');
    exit;
}

sleep(1);
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
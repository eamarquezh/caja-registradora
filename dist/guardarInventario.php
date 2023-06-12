<?php
header('Content-Type: application/json');
include 'conector.php';
$id_producto = $_REQUEST['id_producto'];
$producto_a = $_REQUEST['producto_a'];
$compra_a = $_REQUEST['compra_a'];
$venta_a = $_REQUEST['venta_a'];
$fecha_a = $_REQUEST['fecha_a'];
$cantidad_a = $_REQUEST['cantidad_a'];
 
$consulta = "insert caja_registradora.inventario(id_producto,producto_a,compra_a,venta_a,fecha_a,cantidad_a) 
                value('$id_producto','$producto_a','$compra_a','$venta_a','$fecha_a','$cantidad_a');";
if (!$resultado = $conexion->query($consulta)) {
    echo ('Noo');
    exit;
}

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
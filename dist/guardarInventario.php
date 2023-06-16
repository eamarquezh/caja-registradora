<?php
header('Content-Type: application/json');
include 'conector.php';
$id_producto = $_REQUEST['id_producto'];
$producto_a = $_REQUEST['producto_a'];
$compra_a = $_REQUEST['compra_a'];
$venta_a = $_REQUEST['venta_a'];
$fecha_a = $_REQUEST['fecha_a'];
$cantidad_a = $_REQUEST['cantidad_a'];
 

$consulta = "select count(*)as conteo from caja_registradora.inventario where id_producto='$id_producto';";
if (!$resultado = $conexion->query($consulta)) {
    echo json_encode('Noo');
    exit;
}
while ($array_registro = $resultado->fetch_assoc()) {
    $conteo = $array_registro['conteo'];
}

if($conteo>0){
    $consulta = "UPDATE caja_registradora.inventario
    SET producto_a = '$producto_a',
        compra_a = '$compra_a',
        venta_a = '$venta_a',
        fecha_a = '$fecha_a',
        cantidad_a = '$cantidad_a'
    WHERE id_producto = '$id_producto';";
}else{
    $consulta = "INSERT caja_registradora.inventario(id_producto,producto_a,compra_a,venta_a,fecha_a,cantidad_a) 
                VALUE('$id_producto','$producto_a','$compra_a','$venta_a','$fecha_a','$cantidad_a');";
}


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
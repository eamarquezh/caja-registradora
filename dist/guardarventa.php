<?php
header('Content-Type: application/json');
include 'conector.php';

$jsonData = file_get_contents('php://input');
$objetos = json_decode($jsonData);


foreach ($objetos as $objeto) {
    $producto = $objeto->producto;
    $cantidad = $objeto->cantidad;
    $total = $objeto->total;


        // Realiza la inserción en la tabla
        $consulta = "UPDATE inventario
        SET cantidad_a = cantidad_a-$cantidad
        WHERE producto_a = '$producto';";
        // Ejecuta la consulta
        if (!$resultado = $conexion->query($consulta)) {
            echo ('Noo');
            exit;
        }
  
    // Realiza la inserción en la tabla
    $consulta = "INSERT venta(producto,cantidad,total,fechahora) 
    VALUE('$producto','$cantidad','$total',now());";
    // Ejecuta la consulta
    if (!$resultado = $conexion->query($consulta)) {
        echo ('Noo');
        exit;
    }
  }


sleep(1);
$consulta = "select * from inventario;";
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
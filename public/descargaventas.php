<?php

include "conector.php";

	$consulta = "select * from caja_registradora.venta;";
	if (!$resultado = $conexion->query($consulta)) {
		echo ('Noo');
		exit;
	}

$miArray = array("producto,cantidad,total,fechahora","\n");


while ($array_registro = $resultado->fetch_assoc()) {

  $dat1=$array_registro['producto'];
  $dat2=$array_registro['cantidad'];
  $dat3=$array_registro['total'];
  $dat4=$array_registro['fechahora'];


  $linea="$dat1,$dat2,$dat3,$dat4";

  array_push($miArray,$linea, "\n");

  }



echo json_encode($miArray);



$resultado->free(); 
$conexion->close();
?>
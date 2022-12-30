<?php    
//header("Content-type: application/json; charset=utf-8");

//$input = json_decode(file_get_contents("php://input"), true);
//$output = array("post" => 0, "html" => "");

$nombre = $_POST['nombre'];  //metodo post que tiene el name de nombre  (guardamos el nombre dentro de una variable nombre)
$telefono = $_POST['telefono'];
$correo = $_POST['email'];
$mensaje = $_POST['mensaje'];

//echo json_encode('Datos recibidos correctamente!!!');
//echo json_encode($query, JSON_FORCE_OBJECT);

//var_dump($_POST);

//echo json_encode($output);

// Mandamos una respuesta a mi archivo script2.js, para que se genere alguna accion
echo json_encode('Datos recibidos!!!');
?>
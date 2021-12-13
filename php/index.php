<?php
echo "Usando o servidor interno do PHP";

$nome = $_POST['nome'];
$email = $_POST['email'];
$msg = $_POST['msg'];

echo "Olá " . $nome . $email . $msg;
?>

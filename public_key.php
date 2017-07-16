<?php
	include "php/controllers/Cryptography.php";
	$params = $_REQUEST;
	$app = new Cryptography($params);
	$key = $app->getPublicKeyAction();
	echo $key;
	exit();
?>
<?php

$data = json_decode(file_get_contents("php://input"));

$fp = fopen('languages.json', 'w');
fwrite($fp, json_encode($data));
fclose($fp);

?>
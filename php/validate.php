<?php
declare(strict_types = 1);

$json = file_get_contents("data.json");
$json = json_decode($json, true);
if(!empty($_GET['name'])){
    if($_GET['name']!==$json['name']) { echo "Name should be DEEP, not {$_GET['name']}</br>";}
}

if(!empty($_GET['pass'])){
    if($_GET['pass']!==$json['pass']) { echo "Password should be 123456, not {$_GET['pass']}</br>";}  
}


 
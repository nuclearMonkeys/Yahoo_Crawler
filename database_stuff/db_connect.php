
<?php
$host = "localhost";
$username = "root";
$user_pass = "";
$database_in_use = "test";

$mysqli = new mysqli($host, $username, $user_pass, $database_in_use);

echo $mysqli->host_info . "<br>";
?> 

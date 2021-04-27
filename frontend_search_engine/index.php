<html>

<head>
</head>

<body>
<h1>Jokes Page</h1>

<?php

$host = "localhost";
$user = "root";
$user_pass = "";
$database_in_use = "test"

$mysqli = new mysqli($host, $user, $user_pass, $database_in_use);

echo $mysqli->host_info . "\n";
?>

</body>

</html>
<?php

$sql = "SELECT name, age, grade FROM student";
$result = $mysqli->query($sql);

if ($result->num_rows > 0) 
{
	// output data of each row
	while ($row = $result->fetch_assoc()) 
	{
		echo "id: " . $row["name"]. " -Name: " . $row["age"]. " " . $row["grade"] . "<br>";
	}
}
else 
{
	echo "0 results";
}
?> 

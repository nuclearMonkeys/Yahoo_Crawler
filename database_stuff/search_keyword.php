<?php
include db_connect.php;

// Search tje database for the name Jim
echo "<h2>Show all names Jim</h2>";
$sql = "SELECT name, age, grade FROM student WHERE name LIKE 'Jim'";
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

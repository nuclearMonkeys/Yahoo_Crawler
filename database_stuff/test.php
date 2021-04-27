<!DOCTYPE html>
<html>
<body>

<?php
include "db_connect.php";

// include "search_stuff.php";
?>
<form action="search_keyword.php">
  Please enter a keywork to search for:<br>
  <input type="text" name="keywird"><br>
  
  <input type="submit" value="Submit">
</form>

<?php 
// include "search_keyword.php";

$mysqli->close()
?> 

</body>
</html>

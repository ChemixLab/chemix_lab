<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "chemixdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO chemical (chemical_name, chemical_notation,image)
VALUES ('sodium choloride','Nacl','img1')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

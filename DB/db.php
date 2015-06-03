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

$sql = "INSERT INTO tb_reaction (input_chemical, output_chemical,observation,cataliist)
VALUES ('Hydrojen oxide#sodium chlorid','hydrojen chloride#sodium oxide','smoke#red color','phenofthelin')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

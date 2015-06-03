<?php
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "chemixdb";

$input = $_POST['fname'];

$data = json_decode(file_get_contents("php://input"));
$fstname = mysql_real_escape_string($data->fstname);
$lstname = mysql_real_escape_string($data->lstname);
mysql_connect("localhost", "root", "") or die(mysql_error());
mysql_select_db("angularjs") or die(mysql_error());
mysql_query("INSERT INTO friends (fname,lname) VALUES ('$fstname', '$lstname')");
Print "Your information has been successfully added to the database.";

// // Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);
// // Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// } 

// $sql = "INSERT INTO tb_reaction (input_chemical, output_chemical,observation,cataliist)
// VALUES ('$input','hydrojen chloride#sodium oxide','smoke#red color','phenofthelin')";

// if ($conn->query($sql) === TRUE) {
//     echo "New record created successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }

// $conn->close();
// ?>

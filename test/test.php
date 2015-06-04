<?php
$data = json_decode(file_get_contents("php://input"));
$fstname = mysql_real_escape_string($data->fstname);
$lstname = mysql_real_escape_string($data->lstname);
mysql_connect("localhost", "root", "") or die(mysql_error());
mysql_select_db("angularjs") or die(mysql_error());
mysql_query("INSERT INTO friends (fname,lname) VALUES ('$fstname', '$lstname')");
Print "Your information has been successfully added to the database.";
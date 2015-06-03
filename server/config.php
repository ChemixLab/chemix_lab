<?php

  /****** Database Details *********/
    
    $host      = "localhost"; 
    $user      = "root"; 
    $pass      = ""; 
    $database  = "chemixdb";
    $con       = mysql_connect($host,$user,$pass);

    if (!$con) {
        die('Could not connect: ' . mysql_error());
    }

    //echo 'Connected successfully'; 
    
    mysql_select_db($database,$con);  

    /*******************************/

?>
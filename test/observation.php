<?php
	$host="localhost";
	$user="root";
	$pass="";
	$db="chemixdb";
			
	$conn=mysql_connect($host,$user,$pass);
	mysql_select_db($db,$conn);
	$id = 123;
	$sql = "SELECT * FROM observation";
	$res = mysql_query($sql);
	$result = array();
	
	while($row = mysql_fetch_array($res)) {
		array_push($result, array('observation_id'=> $row[0],
									'observation_name'=>$row[1],
									'image'=>$row[2]
								));
		 }
	echo json_encode(array("result = "=>$result));
?>
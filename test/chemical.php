<?php
	$host="localhost";
	$user="root";
	$pass="";
	$db="chemixdb";
			
	$conn=mysql_connect($host,$user,$pass);
	mysql_select_db($db,$conn);
	$id = 123;
	$sql = "SELECT * FROM chemical";
	$res = mysql_query($sql);
	$result = array();
	
	while($row = mysql_fetch_array($res)) {
		array_push($result, array('chemical_id'=> $row[0],
									'chemical_name'=>$row[1],
									'chemical_notation'=>$row[2],
									'image'=>$row[3]
								));
		 }
	echo json_encode(array("result = "=>$result));
?>
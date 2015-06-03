<?php
	$host="localhost";
	$user="root";
	$pass="";
	$db="chemixdb";
			
	$conn=mysql_connect($host,$user,$pass);
	mysql_select_db($db,$conn);
	
	$sql = "SELECT * FROM tb_reaction";
	$res = mysql_query($sql);
	$result = array();
	
	while($row = mysql_fetch_array($res)) {
		array_push($result, array('reaction_id'=> $row[0],
									'input_chemical'=>$row[1],
									'output_chemical'=>$row[2],
									'observation'=>$row[3],
									'cataliist'=>$row[4]
								));
		 }
	echo json_encode(array("result = "=>$result));
?>
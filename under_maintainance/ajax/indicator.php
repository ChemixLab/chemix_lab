<?php
	include_once './db.php';
    
    $sql = "SELECT DISTINCT indicator FROM reaction";
    $response = mysql_query($sql);
    
    $reslut = array();
    
    while ($row = mysql_fetch_array($response)) {
        array_push($reslut,array('indicator' => $row['indicator']));

}

echo json_encode(array("result"=>$reslut));
?>
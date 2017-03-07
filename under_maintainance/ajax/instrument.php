<?php
    include_once './db.php';
    
    $sql = "SELECT * FROM chemicals";
    $response = mysql_query($sql);
    
    $reslut = array();
    
    while ($row = mysql_fetch_array($response)) {
        array_push($reslut,array('id' => $row[0],
								'name' => $row[1],
								'symbol' => $row[2],
								'level' => $row[3],
								'color' => $row[4],
								'src' => $row[5]));

}

echo json_encode(array("result"=>$reslut));
?>
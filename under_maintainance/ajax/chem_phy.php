
<?php
    include_once './db.php';
    
    $sql = "SELECT DISTINCT level FROM chemicals";
    $response = mysql_query($sql);
    
    $reslut = array();
    
    while ($row = mysql_fetch_array($response)) {
        array_push($reslut,array('level' => $row[0]));

}

echo json_encode(array("result"=>$reslut));
?>
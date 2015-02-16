 <?php
    include_once './db.php';
    
	$id = $_POST['id'];
	
    $sql = "SELECT * FROM  reaction WHERE id='$id'";
    $response = mysql_query($sql);
    
    
    $reslut = array();
    
    while ($row = mysql_fetch_array($response)) {
        
		array_push($reslut,array('reactant1' => $row[1],
								'rplevel1' => $row[2],
								'reactant2' => $row[3],
								'rplevel2' => $row[4],
								'indicator' => $row[5],
								'product1' => $row[6],
								'pplevel1' => $row[7],
								'product2' => $row[8],
								'pplevel2' => $row[9],
								'product3' => $row[10],
								'pplevel3' => $row[11],
                                                                'obser1' => $row[12]
								 ));

}
echo json_encode(array("result"=>$reslut));
?>
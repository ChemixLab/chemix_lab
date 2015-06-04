<?php

include('config.php'); 

/**  Switch Case to Get Action from controller  **/

switch($_GET['action'])  {
    case 'add_product' :
            add_product();
            break;

    case 'get_product' :
            get_product();
            break;

    case 'edit_product' :
            edit_product();
            break;

    case 'delete_product' :              
            delete_product();
            break;

    case 'update_product' :
            update_product();
            break;
}


/**  Function to Add Product  **/

function add_product() {
    $data = json_decode(file_get_contents("php://input")); 
    $reaction_id = $data->reaction_id;
    $input_chemical      = $data->input_chemical;    
    $output_chemical      = $data->output_chemical;
    $observation     = $data->observation;
    $cataliist  = $data->cataliist;
 
    print_r($data);
    $qry = 'INSERT INTO tb_reaction (reaction_id,input_chemical,output_chemical,observation,cataliist) values ("'.$reaction_id.'","' .$input_chemical . '","' . $output_chemical . '","' .$observation . '","'.$cataliist.'")';
   
    $qry_res = mysql_query($qry);
    if ($qry_res) {
        $arr = array('msg' => "Product Added Successfully!!!", 'error' => '');
        $jsn = json_encode($arr);
        // print_r($jsn);
    } 
    else {
        $arr = array('msg' => "", 'error' => 'Error In inserting record');
        $jsn = json_encode($arr);
        // print_r($jsn);
    }
}


/**  Function to Get Product  **/

function get_reaction() {    
    $qry = mysql_query('SELECT * from 	tb_reaction');
    $data = array();
    while($rows = mysql_fetch_array($qry))
    {
        $data[] = array(
                    "reaction_id"            => $rows['reaction_id'],
                    "input_chemical"     => $rows['input_chemical'],
                    "output_chemical"     => $rows['output_chemical'],
                    "observation"    => $rows['observation'],
                    "cataliist" => $rows['cataliist']
                    );
    }
    print_r(json_encode($data));
    return json_encode($data);  
}


/**  Function to Delete Product  **/

function delete_product() {
    $data = json_decode(file_get_contents("php://input"));     
    $index = $data->prod_index;     
    //print_r($data)   ;
    $del = mysql_query("DELETE FROM product WHERE id = ".$index);
    if($del)
    return true;
    return false;     
}


/**  Function to Edit Product  **/

function edit_product() {
    $data = json_decode(file_get_contents("php://input"));     
    $index = $data->prod_index; 
    $qry = mysql_query('SELECT * from product WHERE id='.$index);
    $data = array();
    while($rows = mysql_fetch_array($qry))
    {
        $data[] = array(
                    "id"            =>  $rows['id'],
                    "prod_name"     =>  $rows['prod_name'],
                    "prod_desc"     =>  $rows['prod_desc'],
                    "prod_price"    =>  $rows['prod_price'],
                    "prod_quantity" =>  $rows['prod_quantity']
                    );
    }
    print_r(json_encode($data));
    return json_encode($data);  
}


/** Function to Update Product **/

function update_product() {
    $data = json_decode(file_get_contents("php://input")); 
    $id             =   $data->id;
    $prod_name      =   $data->prod_name;    
    $prod_desc      =   $data->prod_desc;
    $prod_price     =   $data->prod_price;
    $prod_quantity  =   $data->prod_quantity;
   // print_r($data);
    
    $qry = "UPDATE product set prod_name='".$prod_name."' , prod_desc='".$prod_desc."',prod_price='.$prod_price.',prod_quantity='.$prod_quantity.' WHERE id=".$id;
  
    $qry_res = mysql_query($qry);
    if ($qry_res) {
        $arr = array('msg' => "Product Updated Successfully!!!", 'error' => '');
        $jsn = json_encode($arr);
        // print_r($jsn);
    } else {
        $arr = array('msg' => "", 'error' => 'Error In Updating record');
        $jsn = json_encode($arr);
        // print_r($jsn);
    }
}

?>
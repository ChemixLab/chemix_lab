<?php

include('config.php'); 


/**  Switch Case to Get Action from controller  **/
/**fahim **/
switch($_GET['action'])  {
    case 'add_reaction' :
            add_reaction();
            break;

    case 'get_reation' :
            get_reation();
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

function add_reaction() {
    $data = json_decode(file_get_contents("php://input")); 
    $input_chemical      = 'test1';//$data->input_chemical;    
    $output_chemical     = 'test2';//$data->output_chemical;
    $observation    = 'test3';//$data->observation;
    $cataliist = 'test4';//$data->cataliist;
 
    print_r($data);
    $qry = 'INSERT INTO tb_reaction (input_chemical ,output_chemical,observation,cataliist) values ("' .  $input_chemical  . '","' .  $output_chemical   . '",' .$observation . ','. $cataliist.')';
   
    $qry_res = mysql_query($qry);
    if ($qry_res) {
        $arr = array('msg' => "Reaction Added Successfully!!!", 'error' => '');
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

function get_reation() {    
    $qry = mysql_query('SELECT * from product');
    $data = array();
    while($rows = mysql_fetch_array($qry))
    {
        $data[] = array(
                    "id"            => $rows['id'],
                    "prod_name"     => $rows['prod_name'],
                    "prod_desc"     => $rows['prod_desc'],
                    "prod_price"    => $rows['prod_price'],
                    "prod_quantity" => $rows['prod_quantity']
                    );
    }
    print_r(json_encode($data));
    return json_encode($data);  
}


/**  Function to Delete Product  **/

function delet_product() {
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

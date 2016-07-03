<?php

$postData = file_get_contents("php://input");
$dataObject = json_decode($postData);

//$data = [];
$nama   = $dataObject->data->name;
$desc   = $dataObject->data->desc;
$street = $dataObject->data->street;
$city   = $dataObject->data->city;
$prov   = $dataObject->data->prov;
$poscode= $dataObject->data->poscode;
//
    $data  = [];
    $data['nama']           = $nama;
    $data['desc']           = $desc;
    $data['street']         = $street;
    $data['city']           = $city;
    $data['prov']           = $prov;
    $data['poscode']        = $poscode;
//array_push($data, $temp_data);

echo json_encode($data);
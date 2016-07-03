<?php

$postData = file_get_contents("php://input");
$dataObject = json_decode($postData);

//$data = [];
$devisi = $dataObject->data->devisi;
$nama   = $dataObject->data->namaask;
$desc   = $dataObject->data->descask;
//
    $data  = [];
    $data['devisi']            = $devisi;
    $data['namaask']           = $nama;
    $data['descask']           = $desc;
//array_push($data, $temp_data);

echo json_encode($data);
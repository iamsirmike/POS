<?php
session_start();
include('../connect.php');
$a = $_POST['name'];
$b = $_POST['address'];
$c = $_POST['contact'];
$d = $_POST['email'];
$e = $_POST['city'];
// query
$sql = "INSERT INTO customer (customer_name,address,contact,email,city) VALUES (:a,:b,:c,:d,:e)";
$q = $db->prepare($sql);
$q->execute(array(':a' => $a, ':b' => $b, ':c' => $c, ':d' => $d, ':e' => $e));
header("location: customer.php");


?>
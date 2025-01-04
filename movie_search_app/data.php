<?php

include_once "./connect.php";


$email=$_REQUEST['email'];
$username=$_REQUEST['username'];
$password=$_REQUEST['password'];

$sql="insert into movie(email,username,password)values('$email','$username','$password');";

mysqli_query($connect,$sql);
header('location: ./first.html');


?>
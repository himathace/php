<?php

include_once "./connection.php";


$firstname=$_REQUEST['firstname'];
$lastname=$_REQUEST['lastname'];
$email=$_REQUEST['email'];
$password=$_REQUEST['password'];
$mobile=$_REQUEST['mobile'];
$id=$_REQUEST['id'];
$country=$_REQUEST['country'];


$sql="insert into travel(firstname,lastname,email,password,mobile,idnumber,country)values('$firstname','$lastname','$email','$password','$mobile','$id','$country');";
mysqli_query($connection,$sql);


header("location: ./sucess.html");













?>
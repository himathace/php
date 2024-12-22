<?php

include_once "./connection.php";


$username=$_REQUEST['username'];
$password=$_REQUEST['password'];

$sql="select * from travel where lastname='$username' and password='$password';";
$conn=mysqli_query($connection,$sql);
if(mysqli_num_rows($conn)){
    header("location: welcome.html");

}
else{
    echo "username or password not found";
}








?>





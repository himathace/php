<?php

session_start();

include_once "./connect.php";

$username=$_REQUEST['logusername'];
$password=$_REQUEST['logpassword'];


$sql="select * from movie where username='$username'and password='$password';";

$loginconnection=mysqli_query($connect,$sql);
if(mysqli_num_rows($loginconnection)){
    $_SESSION['username']=$username;
    header('location: myhomepage.php');

}
else{
    echo "username and password not found";
}


?>
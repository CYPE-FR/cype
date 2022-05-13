<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$message= $_POST['message'];
$to = "thonyabatan@gmail.com";
$subject = "Mail From website";
$txt = " Name : ". $name . "\r\n Email : " . $email . "\r\n Phone : ". $phone. "\r\n Message : " . $message;
$headers = "From: ".$email;
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>
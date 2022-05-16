<?php
//get data from form  
$name = $_POST['p_name'];
$email= $_POST['p_email'];
$sujet= $_POST['p_subject'];
$phone= $_POST['p_phone'];
$message= $_POST['p_message'];
$to = "thonyabatan@gmail.com";
$subject = "Mail From website";
$txt = " Name : ". $name . "\r\n Email : " . $email . "\r\n Phone : ". $phone. "\r\n Sujet : ". $sujet. "\r\n Message : " . $message;
$headers = "From: ".$email;
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
?>
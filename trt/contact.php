<?php 
    //si le formulaire a été soumis
    if(isset($_POST["p_message"])){ 
        $message = "Ce message vous a été envoyé via la page contact du site web  
        Nom : " . $_POST["p_name"] . "
        Email : " . $_POST["p_email"] . "
        Sujet : " . $_POST["p_subject"] . "
        Téléphone : " . $_POST["p_phone"] . "
        Message : " . $_POST["p_message"];
        $retour = mail("contact@cypefrance.com",$_POST["p_subject"],$message,"From:".$_POST["p_email"]."\r\n"."Reply-to:".$_POST["p_email"]);
        if($retour){
            header("Location:../index.php#contact?msg=Message envoyé");
        }
    }
?>
<?php 
header('Location: index.html#contact');
    //si le formulaire a été soumis
    if(isset($_POST["p_message"])){ 
        $message = "Ce message vous a été envoyé via la page contact du site vitrine 
        Nom : " . $_POST["p_name"] . "
        Email : " . $_POST["p_email"] . "
        Sujet : " . $_POST["p_subject"] . "
        Téléphone : " . $_POST["p_phone"] . "
        Message : " . $_POST["p_message"];

        $retour = mail("thonyabatan@gmail.com",$_POST["p_subject"],$message,"From:".$_POST["p_email"]."\r\n"."Reply-to:".$_POST["p_email"]);
        if($retour){
            echo "<p>L'email a bien été envoyé.</p>";
        }
    }
?>
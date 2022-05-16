<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Contact</title>
    <link rel="stylesheet" href="contact.css">
</head>
<body>
    <h1>Contactez-nous</h1>
    <p>Pour toute demande, remplissez le formuliare ci-dessous.</p>
    <form method="post">
        <input type="text" name="nom" placeholder="Nom" required>
        <small class="error"></small>

        <input type="email" name="email" placeholder="Email" required>
        <small class="error"></small>

        <input type="text" name="phone" placeholder="Téléphone" required>
        <small class="error"></small>

        <input type="text" name="sujet" placeholder="Sujet" required>
        <small class="error"></small>

        <textarea name="message" placeholder="Message" required></textarea>
        <input type="submit" value="Envoyer le message">
        <small class="error"></small>

    </form>
    <?php

    //si le formulaire a été soumis
    if(isset($_POST["message"])){ 
        $message = "Ce message vous a été envoyé via la page contact du site vitrine 
        Nom : " . $_POST["nom"] . "
        Email : " . $_POST["email"] . "
        Téléphone : " . $_POST["phone"] . "
        Message : " . $_POST["message"];

        $retour = mail("thonyabatan@gmail.com",$_POST["sujet"],$message,"From:".$_POST["email"]."\r\n"."Reply-to:".$_POST["email"]);
        if($retour){
            echo"<p>L'email a bien été envoyé.<p>";
        }
    }
   
    ?>
</body>
</html>


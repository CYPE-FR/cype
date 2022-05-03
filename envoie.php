<?php
// Lire les données du formulaire …
$nom = trim($_POST);
$prenom = trim($_POST);
$tel = trim($_POST);
$mail = trim($_POST);
$message = trim($_POST);


// Créer le message. Ceci ne prend pas en charge que tu as certains champs obligatoire.
// Mais je te laisse travailler aussi un peu … ;-)
// une piste … if ( !empty($nom) && etc.

$msg = "Nom :\t$nom\n";
$msg .= "Prénom :\t$prenom\n";
$msg .= "Tel :\t$tel\n";
$msg .= "E-mail :\t$mail\n\n";
$msg .= "Message :\t$message\n";

// le déstinataire du mail …
$recipient = "thonyabatan@gmail.com";
// le sujet
$subject = "Super mail du site xxx.fr";
// on va mettre reply to … répondre à …
$mailheaders = "Reply-To: $mail\n\n";

// Est-ce le mail a pu être envoyer ?
if(mail($recipient, $subject, $msg, $mailheaders))
{
// OUI!!! Tu peux l’envoyer sur n’importe quel page …
header("Location: [url=http://www.ton_site.fr/accueil.html]http://www.ton_site.fr/accueil.html [/url] ");
}
else
{
echo "Le mail n'a pas été enovoyé! Veuillez reessayer!";
}
?>
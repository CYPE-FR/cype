<?php
if($_POST["message"]) {
mail("thonyabatan@gmail.com", "Here is the subject line",
$_POST["insert your message here"]. "From: $email");
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form To Email Using JavasScript</title>
    <link rel="stylesheet" href="formulaire.css">
</head>

<body>
    <div class="container">
        <form action="mail.php" method="post">
            <h3>get in touch</h3>
            <input type="text" id="name" placeholder="your name" required>
            <input type="email" id="email" placeholder="your email" required>
            <input type="text" id="phone" placeholder="your phone" required>
            <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
            <button type="submit">Send</button>

        </form>
    </div>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script>
        function sendEmail() {
            Email.send({
                SecureToken: "CD778D6E48C7897667375F22FA3D1A2063C111EEA03C4792CF86D789B459891D538FEBB1622DCCA0B8044932DAE719BF",
                //Host: "smtp.elasticemail.com",
                //Username: "thony@outlook.fr",
                //Password: "2DF7DEDD99E0D7A21A79AE1A895B8EC22961",
                To: 'thonyabatan@gmail.com',
                From: document.getElementById("email").value,
                Subject: "New Contact Form Enquiry",
                Body: "Name: " + document.getElementById("name").value
                    + "<br> Email: " + document.getElementById("email").value
                    + "<br> Phone: " + document.getElementById("phone").value
                    + "<br> Message: " + document.getElementById("message").value

            }).then(
                message => alert("Message Sent Succesfully")
            );
        }
    </script>
</body>

</html>
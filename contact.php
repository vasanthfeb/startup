<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $phone   = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $to = "business@wexor.in";
    $subject = "New Contact Form Submission";

    $body = "
    Name: $name
    Email: $email
    Phone: $phone

    Message:
    $message
    ";

    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)){
        echo "Message Sent Successfully!";
    } else {
        echo "Message Failed!";
    }

}
?>
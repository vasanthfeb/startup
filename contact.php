<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $phone   = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $to = "business@wexor.in";
    $subject = "New Contact Form Submission";

    $body = "
    You received a new message:

    Name: $name
    Email: $email
    Phone: $phone
    Message:
    $message
    ";

    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)){
        echo "<script>alert('Message Sent Successfully'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Message Failed to Send'); window.location.href='index.html';</script>";
    }

} else {
    header("Location: index.html");
    exit();
}
?>
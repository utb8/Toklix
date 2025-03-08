<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "beke2008g@gmail.com";
    $subject = "رسالة دعم فني من Toklix";
    $email = $_POST["email"];
    $message = $_POST["message"];
    $headers = "From: $email";

    if(mail($to, $subject, $message, $headers)) {
        echo "تم إرسال رسالتك بنجاح!";
    } else {
        echo "حدث خطأ أثناء الإرسال!";
    }
}
?>

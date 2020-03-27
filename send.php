<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];
$footerName = $_POST['footerName'];
$footerPhone = $_POST['footerPhone'];
$footerQuestion = $_POST['footerQuestion'];
$controlPhone = $_POST['controlPhone'];
$controlName = $_POST['controlName'];

// Подключаем библиотеку PHPMailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();
 
// Создаем письмо
$mail->SMTPDebug = (0);
$mail->isSMTP();                   // Отправка через SMTP
$mail->Host   = 'smtp.gmail.com';  // Адрес SMTP сервера
$mail->SMTPAuth   = true;          // Enable SMTP authentication
$mail->Username   = 'muhammad.npst@gmail.com';       // ваше имя пользователя
$mail->Password   = '2020Muhammad';    // ваш пароль
$mail->SMTPSecure = 'ssl';         // шифрование ssl
$mail->Port   = 465;               // порт подключения
$mail->CharSet = "utf-8";
$mail->SMTPOptions = array(
  'ssl' => array(
      'verify_peer' => false,
      'verify_peer_name' => false,
      'allow_self_signed' => true
  )
);
 
$mail->setFrom('muhammad.npst@gmail.com', 'Иван Иванов');    // от кого
$mail->addAddress('musalaevzabit@yandex.ru', 'Вася Петров'); // кому
 
// Content
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Новая заявка с сайта';
$mail->Body    = "Имя пользователя: ${userName} ${footerName}, ${controlName}, его телефон: ${userPhone} ${footerPhone}, ${controlPhone}. Его почта: ${userEmail}, . Его вопрос: ${footerQuestion}";

// Отправляем
if ($mail->send()) {
  echo "ок";
} else {  
  echo 'Ошибка: ' . $mail->ErrorInfo;
}
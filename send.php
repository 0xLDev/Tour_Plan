<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$emailNews = $_POST['email-news'];
$modalName = $_POST['modal-name'];
$modalPhone = $_POST['modal-phone'];
$modalEmail = $_POST['modal-email'];
$modalMessage = $_POST['modal-message'];

// Формирование самого письма
if ($name) {
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    <br>
    ";
} elseif ($emailNews) {
    $title = "Новая подписка Best Tour Plan";
    $body = "
    <h2>Новая подписка</h2>
    <b>Почта:</b><br>$emailNews
    <br>
    "; 
} else {
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b>  $modalName<br>
    <b>Телефон:</b>  $modalPhone<br>
    <b>Почта:</b>  $modalEmail<br><br>
    <b>Сообщение:</b><br>$modalMessage
    <br>
    "; 
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'alexander.davydov.web@gmail.com'; // Логин на почте
    $mail->Password   = 'Crazy!23'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('alexander.davydov.web@gmail.com', 'Александр Давыдов'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('d3ewoo@yandex.ru');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }

// Отображение результата
//header('Location: thankyou.html');
if ($name) {
    header('Location: thankyou.html'); 
} else {
    header('Location: subscribe.html'); 
}
if ($modalName) {
	header('Location: thankyou.html');
}
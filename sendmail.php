<?php

//Telegram
$name = $_POST['name'];
$phone = $_POST['phone'];
$title = $_POST['title'];
$token = "5451247266:AAE_abk_Y0ta07EBpnJc9HSbJZ8OGPrdZLg";
$chat_id = "-1001728538528";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Закупка' => $title,
  urldecode($_SERVER['HTTP_REFERER'])
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","спасибо за заказ ");
header('Location: http://pallets24.com.ua/thanks.html');
?>

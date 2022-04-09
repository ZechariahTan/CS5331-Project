<?php

// For CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

$f = fopen('some_record.txt', 'at');
// Supress some strings
$_SERVER['DOCUMENT_ROOT'] = '/dev/null';
$_SERVER['SCRIPT_FILENAME'] = '/dev/null/webhook.php';

// Write out everything about this request to the file
ob_start();
echo "All Headers:\n";
var_dump(getallheaders())."\n";
echo '$_SERVER'.":\n";
var_dump($_SERVER);
echo '$_POST'.":\n";
var_dump($_POST);
echo "Content:\n";
var_dump(file_get_contents('php://input'))."\n";
echo "==============================================================================================\n\n\n\n";
fwrite($f, ob_get_clean());
fclose($f);

echo "success";
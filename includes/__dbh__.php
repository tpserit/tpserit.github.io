<?php

$server = "localhost";
$username = "sa";
$password = "2#J\$zE6oy3pWGQG2";
$db = "bg-22";
$table = "publisher_msg";

$conn = mysqli_connect($server, $username, $password, $db);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
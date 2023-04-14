<?php 

if (isset($_REQUEST["submit"])) {
    require_once "__dbh__.php";

    date_default_timezone_set("Europe/Oslo");
    $date = date("y-m-d H:i:s");
    $message = $_REQUEST["message"];


    $sql = "INSERT INTO publisher_msg (msg_text, msg_timestamp) VALUES (?, ?)";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("Location: /publiser/index.php?error=stmtfailed");
        exit();
    }
    mysqli_stmt_bind_param($stmt, "ss", $message, $date);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    header("Location: /publiser/");
    exit();

} else {
    header("Location: /");
}
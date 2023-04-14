<?php 

if (isset($_REQUEST["submit"])) {
    require_once "__dbh__.php";

    date_default_timezone_set("Europe/Oslo");
    $pwd = $_REQUEST["auth_code"];
    $hashed_pwd = password_hash($pwd);


    $sql = "INSERT INTO `bg-22`.users (user_auth_code) VALUES (?)";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("Location: /admin.html?error=stmtfailed");
        exit();
    }
    mysqli_stmt_bind_param($stmt, "s", $hashed_pwd);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    header("Location: /admin.html?success=true");
    exit();

} else {
    header("Location: /admin.html?error=access");
}
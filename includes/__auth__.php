<?php

if (isset($_POST["submit"])) {
    require_once "__dbh__.php";

    $auth_code = $_REQUEST["auth"];




    $sql = "SELECT `user_id` FROM users WHERE user_auth_code = ?";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("Location: /authenticate/index.html?error=stmtfailed");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "s", $auth_code);
    mysqli_stmt_execute($stmt);

    $result = mysqli_stmt_get_result($stmt);

    if ($row = mysqli_fetch_assoc($result)) {
        session_start();
        $_SESSION["SESSION_INIT"] = time();
        $_SESSION["auth"] = $row["user_id"];
        header("Location: /publiser/");
        // echo $_SESSION["uid"];
        echo $_SESSION["auth"];
        
        if (isset($_SESSION["auth"])) {
            echo "Session super global is set!";
        }
        exit();
    } else {
        header("Location: /authenticate/index.html?error=failed");
        exit();
    }
    mysqli_stmt_close($stmt);

} else {
    header("Location: /");
    exit();
}


?>
<?php

require_once("__dbh__.php");

$last_id_query = mysqli_query($conn, "SELECT MAX(msg_id) FROM " . $table . "");
if (mysqli_num_rows($last_id_query) > 0) {
    $row = mysqli_fetch_array($last_id_query);
    $last_id = $row["MAX(msg_id)"];
}

$sql = "
SELECT * FROM ". $table . " WHERE msg_id='" . $last_id . "'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $resultdata = nl2br($row["msg_text"]);
        echo '
        <p class="info-card--text" id="info-text">' . $resultdata . '</p>
        ';
    }
} else {
    echo '
    <p class="info-card--text" id="info-text"></p>
    ';
}
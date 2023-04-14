<?php
    session_start();
    if(isset($_SESSION["auth"])) {
        if (isset($_SESSION["SESSION_INIT"]) && (time() - $_SESSION["SESSION_INIT"] > 300)) {
            session_unset();
            session_destroy();
            header("Location: /authenticate/index.html?timeout=true");
        } else {
            echo '
            <!DOCTYPE html>
            <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="description" content="Bakgården 2022 Informasjon web app utvilket av Serit Hålogaland">
                <meta name="author" content="Serit Hålogaland avd. Harstad v/ Marcus Heggen">
                <link rel="apple-touch-icon" href="/images/Serit-bakgaarden-logo.ico"/>
                <link rel="apple-touch-icon-precomposed" href="/images/Serit-bakgaarden-logo.ico" />
                <link rel="icon" href="/images/Serit-bakgaarden-logo.ico">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
                <link rel="stylesheet" href="/main.css">
                <script>
                    auto_refresh=window.setTimeout(function(){window.location.href=window.location.href},300000);
                </script>
                <script src="/script/script.js"></script>
                <script src="/script/index.js" defer></script>
                <title>Bakgården 2022</title>
            </head>
                <body>
                    <header class="header">
                    <div class="header_container">
                    <a href="/">
                    <img src="/images/bakgaarden-logo.svg" alt="">
                    </a>
                    <p class="program_subheading header_text">18. - 20. AUGUST 2022</p>
                    </div>
                    </header>
                    <main>
                        <div class="publisher_container">
                        <h2>Publiser melding</h2>
                            <form action="/includes/__post__.php" class="publisher_form" method="post">
                            <textarea name="message" cols="35" rows="10" class="publisher_textarea"></textarea>
                            <div class="publisher_button_container">
                            <button class="button publisher_button" type="submit" name="submit">Publiser</button>
                            </div>
                            </form>
                        </div>
                        <div class="info-card">
                        <p>Siste publiserte melding:</p>
                            <!--<p class="info-card--title"><span><i class="bi bi-info-circle"></i></span>Informasjon</p>-->';
                            require_once("../includes/__select__.php");
            echo '
                           
            </div>
            <form action="/includes/__post__.php" class="publisher_form" method="post">
                <textarea name="message" cols="35" rows="10" class="publisher_textarea" hidden></textarea>
                <div class="publisher_button_container">
                <button class="button remove_button" type="submit" name="submit">Fjern sist publiserte melding</button>
                </div>
            </form> 
                    </main>
                </body>
            </html>
            ';
        }
    } else {
        header("Location: /authenticate/");
    }
?>




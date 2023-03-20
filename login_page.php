<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="./comp/style.css" >
  </head>
    <title>Document</title>
  </head>
  <body>



    <?php require "./comp/nav.php"; ?>

    <section class=forme>
        <div class="row d-flex justify-content-center align-items-center">
            <div class="col-sm-6  text-center">
            <h3 class="mb-5 text-center">SIGN IN</h3>
                <form method="POST" class="mb-5">
                    <label class="mb-2">USERNAME</label>
                    <input type="text" id="username" name="username" class="form-control">
                    <div class="error mb-2" id="error-msg-username"></div>
                    <label class="my-2">PASSWORD</label>
                    <input type="password" id="password" name="password" class="form-control">
                    <div class="error mb-2" id="error-msg-password"></div>
                    <div class="row d-flex justify-content-between mt-5">
                        <div class="col-3">
                            <button type="button" id="btn-reset" class="btn btn-outline-dark">RESET</button>
                        </div>
                        <div class="col-6">
                            <button type="button" id="btn-login" class="btn btn-dark">LOGIN</button>
                        </div>
                    </div>
                    <p class="error text-center mt-5" id="error-server"></p>
                </form>
            </div>
            <p class="text-center" >You don't have an account?? <a href="./new_user_page.php">sign up!</a></p>
        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="./js/log.js"></script>
  </body>
</html>

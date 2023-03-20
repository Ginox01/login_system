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
    <br>
    <section class="text-center mt-5">
      <h3 class="mb-5">VUOI DAVVERO ESEGUIRE IL LOGOUT ??</h3>
      <button id="btn-return" class="btn btn-outline-dark me-5">RETURN</button> <button id="btn-logout" class="btn btn-dark">LOGOUT</button>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script>
      document.getElementById('btn-return').addEventListener('click',()=>{
        window.location.href = "./index.php";
      })

      document.getElementById('btn-logout').addEventListener('click',()=>{
        window.location.href = "./php/logout.php";
      })

    </script>
  </body>
</html>

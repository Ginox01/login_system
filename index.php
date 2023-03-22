<?php
    session_start();
    if(!isset($_SESSION['logged'])){
        header("location: ./login_page.php");
    }

    $id =  $_SESSION['id'];
    
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
 
  <section class="home">
    <div class="text-center">
      <h2>Welcome <?= $_SESSION['username'] ?>!</h2>
    </div><br>
    <div class="text-end me-5">
      <button id="btn-open-new-note-form" class="btn btn-dark">NUOVA NOTA</button>
    </div>

    <input type="hidden" id="user-id" value="<?=$id?>">

    <section id="wrap-forme-home" class="forme close">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-6 wrap-form mx-1">
          <form method="post" class="mb-2">
            <input class="form-control mb-2" type="text" id="title" placeholder="Insert Title*">
            <textarea style="height:300px;resize:none" id="content" placeholder="Insert content.." class="form-control" aria-label="With textarea"></textarea>
            <div class="row d-flex justify-content-between mt-4">
            <div class="error text-center"><p id="error-msg-title"></p></div>
              <div class="mb-2 error text-center"><p id="error-msg-content"></p></div>
              <div class="col-sm-3 mb-3">
                <button type="button" class="btn btn-dark" id="btn-return">RETURN</button>
              </div>
              <div class="col-sm-5">
                <button type="button" class="btn btn-dark" id="btn-new-note">ADD NOTE</button>
              </div>
            </div>
          </form>
          </div>
        </div>
    </section>

    <section id="wrap-notes"></section>
    <section id="wrap-no-notes" class="row" style="display:none">
      <div class="col-sm-6 mx-2">
        <div class="alert alert-light" role="alert">
          You have no notes , create one right away!
        </div>
      </div>

    </section>
    </section>
  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="./js/index.js"></script>
  </body>
</html>

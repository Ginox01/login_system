<?php
  

    $pageName = $_SERVER['SCRIPT_NAME'];
    

?>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
  <div class="container">
    <a class="navbar-brand" href="./index.php">Secret Notes</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link <?= strstr($pageName,"index.php") ? "active":""?> " aria-current="page" href="./index.php">Home</a>
          <span class="line-nav <?= strstr($pageName,"index.php") ? "active":""?>"></span>
        </li>
        <li class="nav-item" style="<?=  isset($_SESSION['logged']) ? 'display:none':'' ?>" >
          <a class="nav-link <?= strstr($pageName,"login_page.php") ? "active":""?> " href="./login_page.php">Login</a>
          <span class="line-nav <?= strstr($pageName,"login_page.php") ? "active":""?> "></span>
        </li>
        <li class="nav-item" style="<?=  isset($_SESSION['logged']) ? 'display:none':'' ?>" >
          <a class="nav-link <?= strstr($pageName,"new_user_page.php") ? "active":""?> " href="./new_user_page.php">New User</a>
          <span class="line-nav <?= strstr($pageName,"new_user_page.php") ? "active":""?> "></span>
        </li>
        <li class="nav-item" style="<?=  isset($_SESSION['logged']) ? '':'display:none' ?>">
          <a class="nav-link <?= strstr($pageName,"logout_page.php") ? "active":""?> " href="./logout_page.php">Logout</a>
          <span class="line-nav <?= strstr($pageName,"logout_page.php") ? "active":""?> "></span>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
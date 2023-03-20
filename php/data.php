<?php 


    if($_SERVER['REQUEST_METHOD'] == "POST"){

        $host = "localhost";
        $user = "Luigi";
        $psw = "ajax";
        $db = "diciannovemarzo";
        $conn = new mysqli($host,$user,$psw,$db);

    }else{
        header("location: ../index.php");
    }


?>
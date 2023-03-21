<?php
    if($_SERVER['REQUEST_METHOD']=="POST"){
        require_once("data.php");

        $utente_id = $_POST['utente_id'];
        $title = $conn->real_escape_string($_POST['title']);
        $nota = $conn->real_escape_string($_POST['nota']);

        $req = "INSERT INTO notes(utente_id,title,nota)
        VALUES('$utente_id','$title','$nota')";

        if($conn->query($req)){
            $data = [
                "response"=>1
            ];
            echo json_encode($data);
        }else{
            $data = [
                "response"=>0,
                "message"=>"There is a problem with our server , please try later"
            ];
            echo json_encode($data);
        }
    }


?>
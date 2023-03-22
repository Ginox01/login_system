<?php

    if($_SERVER['REQUEST_METHOD']=="POST"){
        require_once("data.php");
        $id = $_POST['id'];
        $req = "DELETE FROM notes WHERE id='$id'";

        if($conn->query($req)){
            $data = [
                "response"=>1
            ];
            echo json_encode($data);
        }else{
            $data = [
                "response"=>0,
                "message"=>"We are sorry but we have problem with our server , please try later"
            ];
            echo json_encode($data);
        }


    }else{
        header("location: ../index.php");
    }

?>
<?php 

    if($_SERVER['REQUEST_METHOD']=="POST"){
        require_once("data.php");
        $username = $conn->real_escape_string($_POST['username']);
        $password = $conn->real_escape_string($_POST['password']);

        $req = "SELECT * FROM users WHERE username='$username'";

        if($state = $conn->query($req)){
            if($state->num_rows == 0){
                $data = [
                    "response"=>0,
                    "message"=>"No user matches with this username"
                ];
                echo json_encode($data);
            }else{
                $user = $state->fetch_array(MYSQLI_ASSOC);
                if(password_verify($password,$user['password'])){
                    $data = [

                    ];
                }
            }

        }else{
            $data = [
                "response"=>0,
                "message"=>"We are sorry but this username is alredy taken"
            ];
            echo json_encode($data);
        }

    }else{
        header("location: ../index.php");
    }

?>
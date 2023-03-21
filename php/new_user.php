<?php 

    if($_SERVER['REQUEST_METHOD']=="POST"){

        require_once("data.php");

        $username = $conn->real_escape_string($_POST['username']);
        $password = $conn->real_escape_string($_POST['password']);
        $has_psw = password_hash($password,PASSWORD_DEFAULT);

        $query = "SELECT * FROM users WHERE username='$username'";

        if($state = $conn->query($query)){
            if($state->num_rows > 0){
                $data = [
                    "response"=>0,
                    "message"=>"We are sorry but this username is alredy taken"
                ];
                echo json_encode($data);
                die();
            }
        }


        $req = "INSERT INTO users(username,password)
        VALUES('$username','$has_psw')";

        if($conn->query($req)){
            session_start();
            $data = [
                "response"=>1
            ];
            $_SESSION['logged'] = true;
            $_SESSION['username'] = $username;  

            echo json_encode($data);
        }else {
            $data = [
                "response"=>0,
                "message"=>"We are sorry , there are some trouble with our server , please try later"
            ];
            echo json_encode($data);
        }

    }else {
        header("location: ../index.php");
    }

?>
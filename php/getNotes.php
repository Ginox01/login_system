<?php 

    if($_SERVER['REQUEST_METHOD']=="POST"){

        require_once("data.php");
        $utente_id = $_POST['utente_id'];
        $req = "SELECT * FROM notes WHERE utente_id='$utente_id'";

        if($state = $conn->query($req)){
            if($state->num_rows == 0){
                $data = [
                    "response"=>"empty",
                    "message"=>"There are no notes yet"
                ];
                echo json_encode($data);
            }else{
                $data = [];
                while($notes = $state->fetch_array(MYSQLI_ASSOC)){
                    $tmp['id'] = $notes['id'];
                    $tmp['utente_id'] = $notes['utente_id'];
                    $tmp['title'] = $notes['title'];
                    $tmp['nota'] = $notes['nota'];
                    array_push($data,$tmp);
                }
                echo json_encode($data);
            }
            
        }else{
            $data = [
                "response"=>0,
                "message"=>"We are sorry , but there is a problem with our server , please try later"
            ];
            echo json_encode($data);
        }

    }else{
        header("location: ../index.php");
    }

?>
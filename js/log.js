const username = document.getElementById("username");
const errMsgUsername = document.getElementById("error-msg-username");
const psw = document.getElementById("password");
const errMsgPsw = document.getElementById("error-msg-password");

const btnReset = document.getElementById("btn-reset");
const btnLogin = document.getElementById("btn-login");
const errMsgFromServer = document.getElementById('error-server');

let stepUsername = false;
let stePassword = false;


function checkValidations() {
  checkUsername();
  checkPassword();
}

function checkUsername() {
  if (username.value.length < 4) {
    stepUsername = false;
    errMsgUsername.innerHTML = "The Username must be at least 4 chars long";
    username.className = "form-control is-invalid";
  } else {
    stepUsername = true;
    errMsgUsername.innerHTML = "";
    username.className = "form-control is-valid";
  }
}

function checkPassword() {
  if (password.value.length < 8) {
    stePassword = false;
    errMsgPsw.innerHTML = "The password field must be at least 8 chars long";
    password.className = "form-control is-invalid";
  } else if (!/[a-z]/.test(password.value)) {
    stePassword = false;
    errMsgPsw.innerHTML =
      "The password must contains at least one lowercase char";
    password.className = "form-control is-invalid";
  } else if (!/[A-Z]/.test(password.value)) {
    stePassword = false;
    errMsgPsw.innerHTML =
      "The password must contains at least one uppercase char";
    password.className = "form-control is-invalid";
  } else if (!/\d/.test(password.value)) {
    stePassword = false;
    errMsgPsw.innerHTML = "The password must contains at least one number";
    password.className = "form-control is-invalid";
  } else if (!/[!@#\$%\^&\*]/.test(password.value)) {
    stePassword = false;
    errMsgPsw.innerHTML =
      "The password must contains one of the following chars : !@#$%^&*";
    password.className = "form-control is-invalid";
  } else {
    stePassword = true;
    errMsgPsw.innerHTML = "";
    password.className = "form-control is-valid";
  }
}


btnReset.addEventListener('click',resetForm)
function resetForm(){
  username.className = "form-control";
  errMsgUsername.innerHTML = "";
  username.value = "";
  password.className = "form-control";
  errMsgPsw.innerHTML = "";
  password.value = "";
  errMsgFromServer.innerHTML = "";
}


btnLogin.addEventListener("click", sendDataToServer);
function sendDataToServer() {
  checkValidations();
  if(stepUsername == true && stePassword == true){

    let formData = new FormData;
    formData.append("username",username.value);
    formData.append("password",password.value);

    fetch("./php/login.php",{
      method:"POST",
      header:{"Content-Type":"application/json"},
      body:formData
    }).then(res=>res.json())
    .then(data=>{
      console.log(data);
    })   
  }
        
}

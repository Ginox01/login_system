const username = document.getElementById("username");
const errMsgUsername = document.getElementById("error-msg-username");
const psw = document.getElementById("password");
const errMsgPsw = document.getElementById("error-msg-password");
const pswConfirm = document.getElementById("password-confirm");
const errMsgConfirmPsw = document.getElementById("error-msg-confirm-password");
const btnReset = document.getElementById("btn-reset");
const btnSubmit = document.getElementById("btn-new-user");
const errMsgFromServer = document.getElementById('error-server');

let stepUsername = false;
let stePassword = false;
let stepConfirmPassword = false;

function checkValidations() {
  checkUsername();
  checkPassword();
  checkConfirmPassword();
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

function checkConfirmPassword() {
  if (password.value != pswConfirm.value || pswConfirm.value < 8) {
    stepConfirmPassword = false;
    pswConfirm.className = "form-control is-invalid";
    errMsgConfirmPsw.innerHTML = "The password doesn't macth";
  } else {
    stepConfirmPassword = true;
    pswConfirm.className = "form-control is-valid";
    errMsgConfirmPsw.innerHTML = "";
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
  pswConfirm.className = "form-control";
  errMsgConfirmPsw.innerHTML = "";
  pswConfirm.value = "";
  errMsgFromServer.innerHTML = "";
}


btnSubmit.addEventListener("click", sendDataToServer);
function sendDataToServer() {
  checkValidations();
  if(stepUsername == true &&
    stePassword == true &&
    stepConfirmPassword == true){
      let formData = new FormData;
      formData.append('username',username.value);
      formData.append('password',password.value);
      fetch("./php/new_user.php",{
        method:"POST",
        header:{"Content-Type":"application/json"},
        body:formData
      }).then(res=>res.json())
      .then(data => {
        if(data.response == 1){
          errMsgFromServer.innerHTML = "";
          resetForm();
          window.location.href = "./index.php";
        }else{
          errMsgFromServer.innerHTML = data.message;
        }
      })
    }
}

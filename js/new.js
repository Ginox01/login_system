const username = document.getElementById("username");
const errMsgUsername = document.getElementById("error-msg-username");
const psw = document.getElementById("password");
const errMsgPsw = document.getElementById("error-msg-password");
const pswConfirm = document.getElementById("password-confirm");
const errMsgConfirmPsw = document.getElementById("error-confirm-password");
const btnReset = document.getElementById("btn-reset");
const btnSubmit = document.getElementById("btn-new-user");

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
  if (password.value != pswConfirm.value) {
    stepConfirmPassword = false;
    pswConfirm.className = "form-control is-invalid";
    errMsgConfirmPsw.innerHTML = "The password doesn't macth";
  } else {
    stepConfirmPassword = true;
    pswConfirm.className = "form-control is-valid";
    errMsgConfirmPsw.innerHTML = "";
  }
}

btnSubmit.addEventListener("click", sendDataToServer);
function sendDataToServer() {
  checkValidations();
  //CHECK THE VALIDATIONS+++++++++++++++++++++++++++++++
}

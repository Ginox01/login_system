const user = document.getElementById("user");
const btnOpenFormNote = document.getElementById("btn-open-new-note-form");
const wrapForm = document.getElementById('wrap-forme-home');
const btnCloseForm = document.getElementById('btn-return');
const btnCreateNewNote = document.getElementById('btn-new-note');

const errorMsgTitle = document.getElementById('error-msg-title');
const errorMsgContent = document.getElementById('error-msg-content');
const title = document.getElementById('title');
const content = document.getElementById('content');

let stepTitle = false;
let stepContent = false;

btnOpenFormNote.addEventListener('click',openFormNote);
function openFormNote(){
    wrapForm.classList.replace('close','open');
    document.body.style.backgroundColor = 'gray';
}


btnCloseForm.addEventListener('click',closeForm);
function closeForm(){
    resetForm();
    wrapForm.classList.replace('open','close');
    document.body.style.backgroundColor = "slategray";
}


//GET THE NOTES
function generateNotes(){
    let formData = new FormData;
    formData.append()
}



btnCreateNewNote.addEventListener('click',createNewNote);
function createNewNote(){
    checkValidations();
}


function checkValidations(){
    checkTitle();
    checkContent();

    if(stepTitle == true && stepContent == true){
        console.log('Va bene');
    }
}

function checkTitle(){
    if(title.value.length == 0){
        stepTitle = false;
        title.className = "form-control is-invalid mb-2";
        errorMsgTitle.innerHTML = "The title is required";
    }else if(title.value.length > 15){
        stepTitle = false;
        title.className = "form-control is-invalid mb-2";
        errorMsgTitle.innerHTML = "The title must be max 15 chars long";
    }else{
        stepTitle = true;
        title.className = "form-control is-valid mb-2";
        errorMsgTitle.innerHTML = "";
    }
}

function checkContent(){
    if(content.value.length > 400){
        stepContent = false;
        content.className = "form-control is-invalid";
        errorMsgContent.innerHTML = "Max chars 400";
    }else {
        stepContent = true;
        content.className = "form-control is-valid";
        errorMsgContent.innerHTML = "";
    }
}

function resetForm(){
    stepContent = false;
    stepTitle = false;
    title.value = "";
    content.value = "";
    title.className = "form-control mb-2";
    errorMsgTitle.innerHTML = "";
    content.className = "form-control";
    errorMsgContent.innerHTML = "";
}



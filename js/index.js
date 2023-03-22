const user = document.getElementById("user-id");

const btnOpenFormNote = document.getElementById("btn-open-new-note-form");
const wrapForm = document.getElementById("wrap-forme-home");
const wrapNotes = document.getElementById("wrap-notes");
const wrapNoNotes = document.getElementById("wrap-no-notes");
const btnCloseForm = document.getElementById("btn-return");
const btnCreateNewNote = document.getElementById("btn-new-note");

const errorMsgTitle = document.getElementById("error-msg-title");
const errorMsgContent = document.getElementById("error-msg-content");
const title = document.getElementById("title");
const content = document.getElementById("content");

let stepTitle = false;
let stepContent = false;

btnOpenFormNote.addEventListener("click", openFormNote);
function openFormNote() {
  wrapForm.classList.replace("close", "open");
  document.body.style.backgroundColor = "gray";
}

btnCloseForm.addEventListener("click", closeForm);
function closeForm() {
  resetForm();
  wrapForm.classList.replace("open", "close");
  document.body.style.backgroundColor = "slategray";
}

//For refresh the page
function clearNotes() {
  wrapNotes.innerHTML = "";
}

//GET THE NOTES
generateNotes();
function generateNotes() {
  let formData = new FormData();
  formData.append("utente_id", user.value);

  fetch("./php/getNotes.php", {
    method: "POST",
    header: { "Content-Type": "application/json" },
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.response == "empty") {
        wrapNotes.style.display = "none";
        wrapNoNotes.style.display = "";
        return;
      }
      wrapNotes.style.display = "";
      wrapNoNotes.style.display = "none";
      let notes = "";
      data.map((note) => {
        let wrapNote = `
            <div class='note'>
                <div class='wrap-title-note'>
                    <div style="width:90%"><h6 class="text-center">${note.title}</h6></div>
                    <div style="width:5%"><span  data-id="${note.id}" class="btn-delete-note">X</span></div>
                </div>
                <p style="padding:5px;display:fit">${note.nota}</p>
            </div>
        `;
        notes += wrapNote;
      });
      wrapNotes.innerHTML = notes;
      const btnsDeleteNote = document.querySelectorAll(".btn-delete-note");
      for (let x = 0; x < btnsDeleteNote.length; x++) {
        btnsDeleteNote[x].addEventListener("click", deleteNote);
      }
    });
}
btnCreateNewNote.addEventListener("click", checkValidations);
function checkValidations() {
  checkTitle();
  checkContent();

  if (stepTitle == true && stepContent == true) {
    createNewNote();
  }
}

function checkTitle() {
  if (title.value.length == 0) {
    stepTitle = false;
    title.className = "form-control is-invalid mb-2";
    errorMsgTitle.innerHTML = "The title is required";
  } else if (title.value.length > 20) {
    stepTitle = false;
    title.className = "form-control is-invalid mb-2";
    errorMsgTitle.innerHTML = "The title must be max 20 chars long";
  } else {
    stepTitle = true;
    title.className = "form-control is-valid mb-2";
    errorMsgTitle.innerHTML = "";
  }
}

function checkContent() {
  if (content.value.length > 400) {
    stepContent = false;
    content.className = "form-control is-invalid";
    errorMsgContent.innerHTML = "Max chars 400";
  } else {
    stepContent = true;
    content.className = "form-control is-valid";
    errorMsgContent.innerHTML = "";
  }
}

function resetForm() {
  stepContent = false;
  stepTitle = false;
  title.value = "";
  content.value = "";
  title.className = "form-control mb-2";
  errorMsgTitle.innerHTML = "";
  content.className = "form-control";
  errorMsgContent.innerHTML = "";
}

function createNewNote() {
  let formData = new FormData();
  formData.append("utente_id", user.value);
  formData.append("title", title.value);
  formData.append("nota", content.value);

  fetch("./php/new_note.php", {
    method: "POST",
    header: { "Content-Type": "application/json" },
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.response == 1) {
        closeForm();
        resetForm();
        clearNotes();
        generateNotes();
        return;
      } else if (data.response == 0) {
        alert(data.response);
        return;
      }
    });
}

function deleteNote(e) {
  let id = e.target.dataset.id;
  let formData = new FormData;

  formData.append('id',id);

  fetch("./php/delete_note.php",{
    method:"POST",
    header:{"Content-Type":"application/json"},
    body:formData
  }).then(res=>res.json())
  .then(data=>{
    console.log(data);
    if(data.response == 1){
      clearNotes();
      generateNotes();
    }else if(data.response == 0){
      alert(data.message);
    }
  })

}

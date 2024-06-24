document.addEventListener("DOMContentLoaded", () => {

const dropbox = document.getElementById("dropbox");
const fileInput = document.getElementById("filesInput");
const uploadForm = document.getElementById("uploadFormdrag");
const showfiles = document.getElementById("showfiles");
const fileselected = document.getElementById("fileselected");

fileselected.addEventListener("change", handlefiles, false);

dropbox.addEventListener("dragover", (event) => {
  event.preventDefault();
  event.stopPropagation();

  dropbox.classList.add("dragover");
}, false);

dropbox.addEventListener("dragleave", (event) => {
  event.preventDefault();
  event.stopPropagation();
  dropbox.classList.remove("dragover");
}, false);

dropbox.addEventListener("drop", (event) => {
  event.preventDefault();
  event.stopPropagation();
  handlefiles(event.dataTransfer);

  dropbox.classList.remove("dragover");
  filesInput.files  = event.dataTransfer.files;
  uploadFormdrag.submit();
});

function handlefiles(event) {
  const files = event.files || event.target.files;
  displayfiles(files);
}

function displayfiles(files) {
  showfiles.innerHTML = `
  <p style="font-weight:700 ; font-size: 20px;"> File Name</p>
  `
  
  for(let i=0; i<files.length; i++){
    const file = files[i];
    const div = document.createElement("div");
    div.innerText = file.name;
    showfiles.appendChild(div);
  }
}
});
showNotes();//this function is called here so that alrady existed notes should appear on reload
//If user adds a note then we add it to local storage using event listeners
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", function (e) {//Whenever an event click occurs to add the note we run this function

    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");//To get all the notes stored in local storage
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);//if u get any note in local storage parse it to noteObj whereJSON.parse() is to convert string to javascript object where JSON is used to exchange data from webserver
    }
    noteObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(noteObj));//We can store only string in local storage thus we are using stringify function.
    addText.value = "";//So as to empty the add text section
    console.log(noteObj)

    showNotes();
});
//Function to show notes from local storage
function showNotes() {
    let note = localStorage.getItem("notes");
    if (note == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(note);
    }
    let html = "";
    noteObj.forEach(function (element, index) {
        html += `<div class="notecard mx-2 my-2 card" style="width: 18rem;">
        <div class="card-body">
        <h4 class="card-title">Note${index + 1}</h4>
       <p class="card-text">${element}</p>
        <button id ="${index}" onclick ="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
       </div>
       </div>`;
    });

    let notesElement = document.getElementById("notes");
    if (noteObj.length != 0) {
        notesElement.innerHTML = html;
    }
    else{
        notesElement.innerHTML='Nothing to show! Use "Add a Note" section above to add and save note.';
    }
}
//function to delete a note
function deleteNote(index){
    console.log("Deleteing a Note",index);//To check whether we r getting the index of the right note to be deleted
    let note = localStorage.getItem("notes");
    if (note == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(note);
    }   
    noteObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(noteObj));//this is used to dele the note from local storage
    showNotes();
}


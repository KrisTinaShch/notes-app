const noteTextarea = document.querySelector('.input-add-note');
const addNewNoteButton = document.querySelector('.add-note');
const removeNoteButton = document.querySelector('.delete-note');
const editNoteButton = document.querySelector('.edit-note');
const bodyNewNote = document.querySelector('.new-note');

const notesList = [];

// add new note
addNewNoteButton.onclick = function () {
  if (noteTextarea.value.length > 0) {
    notesList.push(noteTextarea.value);
    bodyNewNote.insertAdjacentHTML('afterend', getHTMLNote(noteTextarea.value, notesList.length - 1));
    noteTextarea.value = '';
    console.log(notesList);
  }
};

function getHTMLNote(noteText, index) {
  const formattedNoteText = noteText.replace(/\n/g, '<br>');

  return `
    <div class="note py-1 px-3 mt-3 d-flex justify-content-between align-items-center" data-index="${index}">
      <div class="w-50">
        <p class="note-description pt-3">${formattedNoteText}</p>
      </div>
      <div>
        <button class="delete-note bg-danger text-white">&#10007;</button>
        <button class="edit-note bg-success text-white">&#10003;</button>
      </div>
    </div>
  `
}
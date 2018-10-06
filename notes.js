console.log('Starting notes \n');

const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  }

  try {
    const notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch(e) {

  }

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
  }
};

const getAllNotes = () => {
  console.log('Getting all notes');
};

const getNote = (title) => {
  console.log(`One note here: ${title}`);
}

const removeNote = (title) => {
  console.log(`Removing one note: ${title}`);
}

module.exports = {
  addNote,
  getAllNotes,
  getNote,
  removeNote,
}
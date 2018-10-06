console.log('Starting notes \n');

const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  }
  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
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
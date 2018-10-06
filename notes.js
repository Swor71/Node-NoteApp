console.log('Starting notes \n');

const addNote = (title, body) => {
  console.log('Adding note', title, body);
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
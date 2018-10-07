const yargs = require('yargs');

const notes = require('./notes');

const argumentOptions = (describe ,demand, alias) => ({describe,demand,alias})


const argv = yargs
  .command('add', 'Add a new note', {
    title: argumentOptions('Title of note', true, 't'),
    body: argumentOptions('Body of note', true, 'b'),
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: argumentOptions('Title of note', true, 't')
  })
  .command('remove', "Removes a note", {
    title: argumentOptions('Title of note', true, 't')
  })
  .help()
  .argv;

const command = argv._[0];

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('New note added:');
    notes.logNote(note);

  } else {
    console.log('A note with this title already exists.');
  }

} else if (command === 'list') {
  const allNotes = notes.getAllNotes();

  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note => notes.logNote(note));

} else if (command === 'read') {
  const note = notes.getNote(argv.title);

  if (note) {
    console.log('Your note:');
    notes.logNote(note);

  } else {
    console.log('This is not the note you\'re looking for');
  }

} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  noteRemoved ? console.log('Removed note') : console.log('Note was not removed');

} else {
  console.log('Command not recognized');
}
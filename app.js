console.log('Starting app \n');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

const command = argv._[0];

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  note ? console.log('New note added.') : console.log('A note with this title already exists.');  
} else if (command === 'list') {
  notes.getAllNotes();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);

  noteRemoved ? console.log('Removed note') : console.log('Note was not removed');
} else {
  console.log('Command not recognized');
}
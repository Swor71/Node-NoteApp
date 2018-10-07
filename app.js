console.log('Starting app \n');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

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
  notes.getAllNotes();

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
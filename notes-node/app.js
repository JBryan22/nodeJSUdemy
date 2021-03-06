//global similar to window
//process is similar to document (DOM)

//to run app use: node <filename> --args (--title="")
//to run app that updates when saving run nodemon instead of node

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleCommandOptions = {
    describe: 'Title of note',
    demand:true,
    alias: 't'
}
const bodyCommandOptions = {
    describe: 'Body of note',
    demand:true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleCommandOptions,
        body: bodyCommandOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleCommandOptions
    })
    .command('remove', 'Remove a note', {
        title: titleCommandOptions
    })
    .help()
    .argv;
var command  = argv._[0];
console.log('Command:', command);
console.log('Yargs', argv);

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
}  else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else{
    console.log('Command not recognized');
}

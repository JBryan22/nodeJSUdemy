console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch(e) {

    }

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    } else {
        console.log("duplicate note");
    }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
    console.log(`Getting ${title}`);
}

var removeNote = (title) => {
    console.log(`Removing ${title}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};

//addNote: addNote is identical to addNote (because the kv pair are named the same and the value is a variable

const fs = require('fs');

let orginalNote = {

    title: 'Secret',
    body: 'this is secret'
};

let originalNoteString = JSON.stringify(orginalNote);

fs.writeFileSync("notes.json", originalNoteString);

console.log('File has been updated');

let noteString = fs.readFileSync("notes.json");
let note = JSON.parse(noteString);

console.log(typeof note);
console.log('Title ',note.title);
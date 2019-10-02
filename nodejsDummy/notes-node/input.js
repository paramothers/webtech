const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

var logNote = (note) => {
     //250 +100 +100 + 135
    if (note) {
        console.log(`-----------`);
        console.log(`Title ${note.title}`);
        debugger;
        console.log(`Body ${note.body}`);
      } else {
        console.log("note has not found ", argv.title);
      }
}

const titleOption = {
    description:'Title of note',
    demand:true,
    alias:'t'
}

const bodyOptions = {
    description:'Body of note',
    demand:true,
    alias:'b'
}


const argv = yargs
.command('add', 'Adding a note',{
    title: titleOption,
    body:bodyOptions
})
.command('list','List all notes')
.command('read','Read a note',{
    title: titleOption
})
.command('remove', 'Remove a note',{
    title: titleOption
})
.help().argv;
let command = argv._[0];

console.log(`Command: `, command);

if (command === "add") {
  let note = notes.addNote(argv.title, argv.body);
  logNote(note);
} else if (command === "list") {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach(note => logNote(note) );
} else if (command === "read") {
  let note = notes.getNote(argv.title);
  logNote(note);
  
} else if (command === "remove") {
  notes.removeNote(argv.title);
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach(note => logNote(note) );
} else {
  console.log(`Command has not recoginized '${command}'`);
}


const fs = require("fs");

let fetchNotes = () => {
  try {
    let notesAsString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesAsString);
  } catch (e) {
    // console.log(e);
    return [];
  }
};

let saveNotes = notesArray => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notesArray));
};

module.exports.addNote = (title, body) => {

  console.log(`Given title '${title}' and body '${body}'`);
  let notesArray = fetchNotes();

  let duplicate = notesArray.filter(note => note.title === title);
  if (duplicate.length === 0) {
    let note = {
      title,
      body
    };
    notesArray.push(note);
    saveNotes(notesArray);
    return note;
  }
};

module.exports.getAll = () => {  
    return fetchNotes();
};

module.exports.getNote = title => {

    let notesArray = fetchNotes();
    let tempArray = notesArray.filter( (note) => note.title == title);
    return tempArray[0];
};

module.exports.removeNote = title => {
    let notesArray = fetchNotes();
    let tempArray = notesArray.filter( (note) => note.title !== title);
    saveNotes(tempArray);
};

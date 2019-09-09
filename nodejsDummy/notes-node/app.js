console.log("Starting Apps...");

const fs = require("fs");
const os = require("os");
const notes = require("./notes");
const _ = require("lodash");

const filePath =
  "E:\\param\\git\\webtech\\nodejsDummy\\notes-node\\greet56ing.txt";
let userInfo = os.userInfo();
// console.log(userInfo);
let fileContent = `Param id: ${userInfo.username} and ${notes.age}`

fs.appendFile(filePath, fileContent, err => {
  if (err) {
    console.log(`got errror`);
  } else {
    console.log(`got appended`);
  }
});

console.log(notes.addNote());

console.log(_.isString(true));
console.log(_.isString("param"));
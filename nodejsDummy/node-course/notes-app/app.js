let fs = require('fs');


// fs.writeFileSync("notes.txt","This file was created by node.js!");
// fs.appendFileSync("notes.txt","\nthis is pavalan");

// const temp = require('./util');
// console.log(`exported name is ${temp.add(4,-2)}`);

// const notes = require('./notes');
// console.log(notes.getNotes());

// const validator = require('validator');
// console.log("email validation ", validator.isEmail("param.othersgmail.com"));
// console.log('url validation ', validator.isURL('https://google.com'));


const chalk = require('chalk');

console.log(chalk.blue('Hello World'));
console.log(chalk.red.inverse('Hai paramasivam '));
console.log(chalk.bold.red.bgWhite('Hi Padhu'));

console.log(process.argv[2]);
const fs = require("fs");
console.log("Starting project");

fs.appendFile("E:\\param\\git\\webtech\\nodejsDummy\\notes-node\\greeting.txt","Hai param", (err) =>{

    if(err){

        console.log("got errror");
    }
    console.log("got appended");
});
let express = require("express");
let app = express();


/* let runCommand = new Promise( (success, nosuccss) =>{

    const { spawn} = require('child_process');
    const myCommand = spawn('dir', ['-u']);

    myCommand.stdout.on('data', (data) => success(data));
    myCommand.stderr.on('data', (data) => nosuccss(data));
    myCommand.on("close", code => {
        console.log(`Exit code ${code}`);
      });

}); */



app.get("/execute", (req, res) => {
  console.log("Execute given command ");
  console.log(process.env.PATH);

  const { spawn} = require('child_process');
  const myCommand = spawn('dir', ['.']);

  myCommand.stdout.on('data', (data) => console.log(data));
  myCommand.stderr.on('data', (data) => console.log(data));
  myCommand.on("close", code => {
      console.log(`Exit code ${code}`);
    });
});

app.listen(4000, () => console.log("server running on port 4000"));
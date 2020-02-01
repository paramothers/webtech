let express = require("express");
let listenerChildProcessEvents = require('./EventListeners.js')
let app = express();

app.use("/static",express.static('public'))

app.get("/execute", (req, res) => {

  console.log("Query String ", req.query);
//   console.log("Execute given command ", req.query.name);
//   console.log("Execute given command ", req.query.script);
//   console.log("Execute given command ", req.query.type);

  const { spawn } = require("child_process");

  let childProcess;

  res.set("Content-Type", "text/plain");
  switch(req.query.type){

    case 'command' :
        console.log(`Given command-task is '${req.query.script}'`);
        childProcess = spawn(req.query.script, {shell: true });
        registerSTDIOStreams(childProcess, res);
        listenerChildProcessEvents(childProcess);
        break;
    case 'python' :
        console.log(`Given python-task is '${req.query.script}'`);
        childProcess = spawn(req.query.script, {shell: true });
        registerSTDIOStreams(childProcess, res);
        listenerChildProcessEvents(childProcess);
        break;
    case 'batch' :
        console.log(`Given batch-task is '${req.query.script}'`);
        childProcess = spawn(req.query.script, {shell: true });
        registerSTDIOStreams(childProcess, res);
        listenerChildProcessEvents(childProcess);
        break;
    default:
        console.log('Nothing matched ...')
        res.end('Given Task cannot be executed');
  }  
});

const registerSTDIOStreams = (childProcess, res) => {
    
    childProcess.stdout.pipe(res);
    childProcess.stderr.pipe(res);
    // childProcess.stdout.on('data', data => {
    //     console.log(data.toString())
    // });

}

app.listen(4000, () => console.log("server running on port 4000"));

let {spawn, exec} = require("child_process");


let spawnChildProcess = spawn("dir", {
    // stdio: 'inherit',  - dont use this, since i want to use stream of child process.
    shell: true,  // i must use in Windows, but should not since it slow down the execution.
    // cwd:'E:/param/git/books/DevOps', // no need, i believe for my case.
    // env: {process.env},
    // detached: false, // used to run background child process and disconnect from parent
});

registerSTDIOStreams(spawnChildProcess);
registerChildProcessEvents(spawnChildProcess);
/* 
let execChildProcess = exec('dir', (err, stdout, stderr) => {

    if(err){
        console.error(`exec error: ${err}`);
        return;
    }

    console.log(`Number of files ${stdout}`)
});
 */



function registerSTDIOStreams(childProcess){

    childProcess.stdout.on("data", data => {

        console.log(data.toString());
        console.log('----(No..)-----');
    });
    childProcess.stderr.on("data", data => console.error(`dir stderr: ${data}`));
}




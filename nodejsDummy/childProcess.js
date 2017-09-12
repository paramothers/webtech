let childProcess = require("child_process");

let childProc = childProcess.exec("ls..", (error, stdout, stderr) => {

    if (stdout) {

        console.log("stdout " + stdout);
    }
    
    if(error){
        
        console.log(error.stack);
        console.log("error code "+error.code);
        console.log("error signal "+error.signal);
    }
});

childProc.on("exit", (code)=>{
    console.log("The process code "+code);
});


 let spawn =  require('child_process').spawn;
 let process = spawn('ls');

 process.stdout.on('data', (data) => console.log(data.toString()))

 process.stderr.on('data',  (data) => console.error(`dir stderr: ${data}`))
 process.on('close', (code) =>{
     console.log(`Exit code ${code}`)     
 })
let {spawn, exec} = require("child_process");


let spawnChildProcess = spawn("ls", {
    // stdio: 'inherit',
    shell: true,
    // cwd:'E:/param/git/books/My Articles/node.js'
});

spawnChildProcess.stdout.on("data", data => console.log(data.toString()));
spawnChildProcess.stderr.on("data", data => console.error(`dir stderr: ${data}`));
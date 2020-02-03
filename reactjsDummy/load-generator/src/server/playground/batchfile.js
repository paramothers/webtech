const {spawn, exec} = require('child_process').spawn;
const listerner = require('./EventListeners');
const path = require('path');

/* console.log("1",require('path').basename('/batchfile.js'));
console.log("12",require('path').dirname('/batchfile.js'));
console.log("122",require('path').resolve('/batchfile.js'));
console.log("122",require('path').dirname('/batchfile.js')); */

// console.log( path.join( __dirname, "batchfile.js" ) );

/* const bat = spawn('cmd.exe', ['/c', path.join( __dirname, "/scripts/simple.bat")]);
// const bat = spawn('cmd.exe', ['/c', 'E:/param/git/webtech/reactjsDummy/load-generator/src/server/scripts/simple.bat']);

bat.stdout.on('data', (data) => {
    // As said before, convert the Uint8Array to a readable string.
    console.log(data.toString());
});
bat.stderr.on('data', (data) => {
    // As said before, convert the Uint8Array to a readable string.
    console.log(data.toString());
});
 */
// listerner(bat);

exec(path.join( __dirname, "/scripts/simple.bat"), (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    // console.log(stdout);
    stdout.on('data', (data) => {
        // As said before, convert the Uint8Array to a readable string.
        console.log(data.toString());
    });
  });

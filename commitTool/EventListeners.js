

module.exports = function (childProcess) {
  childProcess.on("exit", (code, signal) => {
    console.log(
      `Current child process exited, but if there is other child process that continue`
    );
    console.log(`Exit code ${code} and signal ${signal}`);
  });

  childProcess.on("error", (code, signal) => {
    console.log(`Could not spawned new process or killed `);
    console.log(`Error code ${code} and signal ${signal}`);
  });

  childProcess.on("close", (code, signal) => {
    console.log(`All Child process's STDIO streamS gets closed`);
    console.log(`Close code ${code} and signal ${signal}`);
  });

  childProcess.on("disconnect", (code, signal) => {
    console.log(
      `Parent processed manually called 'disconnect()' on child process`
    );
    console.log(`Close code ${code} and signal ${signal}`);
  });

  childProcess.on("message", (code, signal) => {
    console.log(` child process called 'send()' to communicate with parent`);
  });
};;

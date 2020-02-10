let spawn = require("child_process").spawn;
let listeners = require("./EventListeners");
const registerSTDIOStreams = childProcess => {
  childProcess.stdout.on("data", data => {
    console.log(data.toString());
  });
  childProcess.stderr.on("data", data => {
    console.log(data.toString());
  });
};


let gitPath = "C:/Users/PA20011402/Downloads/PortableGit/bin/git";
let repoAlias = 'books';
let pushPath = "https://paramothers:Penn123$@github.com/paramothers";
let cp;

//Books repository
let repoName = "E:/param/git/books";
console.log("\n Stage ",repoAlias);
cp = spawn(gitPath, ["-C", repoName, "add", "--all", "."], { shell: true });
registerSTDIOStreams(cp);

cp.on("close", (code, signal) => {
  console.log("\n Commit ",repoAlias);
  cp = spawn(gitPath, ["-C", repoName, "commit", '--message="Study D3"'], {
    shell: true
  });
  registerSTDIOStreams(cp);
  cp.on("close", (code, signal) => {
        console.log("\n Push ",repoAlias);
        cp = spawn(
            gitPath,
            ["-C", repoName, "push", pushPath + "/"+repoAlias+".git", "--all"],
            { shell: true }
        );
        registerSTDIOStreams(cp);
        cp.on("close", (code, signal) => {

               //OneNote repository
                console.log("======== One Notes ================================")
                repoName = "E:/param/git/onenotes";
                repoAlias = 'onenotes';
                console.log("\n Stage ",repoAlias);
                cp = spawn(gitPath, ["-C", repoName, "add", "--all", "."], { shell: true });
                registerSTDIOStreams(cp);

                cp.on("close", (code, signal) => {
                console.log("\n Commit ",repoAlias);
                cp = spawn(gitPath, ["-C", repoName, "commit", '--message="Study D3"'], {shell: true });
                registerSTDIOStreams(cp);

                        cp.on("close", (code, signal) => {
                            console.log("\n Push ",repoAlias);
                            cp = spawn(
                                gitPath,
                                ["-C", repoName, "push", pushPath + "/"+repoAlias+".git", "--all"],
                                { shell: true }
                            );
                            registerSTDIOStreams(cp);
                            cp.on("close", (code, signal) => {
                                
//Web Tech repository
console.log("========  Webtech ================================")
repoName = "E:/param/git/webtech";
repoAlias = 'webtech';
console.log("\n Stage ",repoAlias);
cp = spawn(gitPath, ["-C", repoName, "add", "--all", "."], { shell: true });
registerSTDIOStreams(cp);

cp.on("close", (code, signal) => {
console.log("\n Commit ",repoAlias);
cp = spawn(gitPath, ["-C", repoName, "commit", '--message="Study D3"'], {shell: true });
registerSTDIOStreams(cp);

        cp.on("close", (code, signal) => {
            console.log("\n Push ",repoAlias);
            cp = spawn(
                gitPath,
                ["-C", repoName, "push", pushPath + "/"+repoAlias+".git", "--all"],
                { shell: true }
            );
            registerSTDIOStreams(cp);            
        });
});
                            })
                        });
                });
        });
  });
});




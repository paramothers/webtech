let fs = require('fs').promises;
let util = require('util');


const fs_readdir = fs.readdir;
// const fs_readdir = util.promisify(fs.readdir);

(
    async () => {
        let dir = '.';
        if(process.argv[2]) {
            dir = process.argv[2];
        }
        const files = await fs_readdir(dir);
        for(let fn of files){
            console.log(fn);
        }
    }

)().catch( err => console.error(err));

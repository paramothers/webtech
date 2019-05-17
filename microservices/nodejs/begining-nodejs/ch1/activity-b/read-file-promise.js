let fs = require('fs');
let util = require('util');

const fileLocation = `${__dirname}/simple.txt`;

const readFile = (file) => {

    return new Promise( (resolve, reject) =>{

        fs.readFile(file,'utf8',(err, data) =>{

            if(err) reject(err);
            resolve(data);
        });
    })
}

let utilFile = util.promisify(fs.readFile);
utilFile(fileLocation, 'utf8')
.then( data => console.log(data))
.catch(err => console.log(err));
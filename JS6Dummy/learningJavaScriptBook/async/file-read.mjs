import {readFile} from 'fs';

function readFileWithPromises(fileName){

    return new Promise(function(resolve, reject){

        readFile(fileName, (error,data) => {
            if(error){
               reject(error);
            }else{
                resolve(data);
            }
        });
    });
}

let promise = readFileWithPromises('E:\\param\\git\\webtech\\JS6Dummy\\learningJavaScriptBook\\async\\my-promise.js');
promise.then(data => console.log(data))
promise.catch(errer => console.log(errer))

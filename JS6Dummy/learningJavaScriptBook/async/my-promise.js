const p = new Promise(
    function(resolve, reject){
        if(2 > 1){
            resolve(value);
        }else{
            reject(reason);
        }
    }
);
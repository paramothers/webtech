const myFib = exports.myFib = function(n, callback){

    if(n == 1 || n == 2 ) return 1;
    else if(n == 3) return 2;
    else {

        process.nextTick( function() {
            myFib(n-1, function(val1) {
                process.nextTick( function() {
                    myFib(n-2, function(val) {
                        callback(val1+val);
                    })
                });
            });
        });
    }
}
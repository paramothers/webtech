
let math = require('../module/math');

exports.addTest = function(test){

    test.equal(math.add(1,3), 4);
    test.done();
}

exports.subTest = function (test){

    test.equal(math.sub(3,3), 1);
    test.done();
}
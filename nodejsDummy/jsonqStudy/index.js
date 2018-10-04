var jsonQ = require("jsonq");



const JsonObject = {
    "fathers": [{
        "age": 44,
        "name": "James Martin",
        "daughters": [{
            "age": 24,
            "name": "Michelle",
            "husband": {
                "age": 30,
                "name": "Matthew"
            }
        }, {
            "age": 30,
            "name": "Angela",
            "husband": {
                "age": 23,
                "name": "William"
            }
        }]
    }, {
        "age": 47,
        "name": "David Thompson",
        "daughters": [{
            "age": 20,
            "name": "Amy",
            "husband": {
                "age": 26,
                "name": "Edward"
            }
        }, {
            "age": 20,
            "name": "Dorothy",
            "husband": {
                "age": 23,
                "name": "Timothy"
            }
        }]
    }, {
        "age": 56,
        "name": "Thomas Young",
        "daughters": [{
            "age": 22,
            "name": "Sharon",
            "husband": {
                "age": 23,
                "name": "Jason"
            }
        }, {
            "age": 22,
            "name": "Carol",
            "husband": {
                "age": 23,
                "name": "William"
            }
        }, {
            "age": 20,
            "name": "Brenda",
            "husband": {
                "age": 30,
                "name": "Timothy"
            }
        }]
    }, {
        "age": 53,
        "name": "Jason Martinez",
        "daughters": [{
            "age": 19,
            "name": "Jessica",
            "husband": {
                "age": 24,
                "name": "Daniel"
            }
        }]
    }, {
        "age": 51,
        "name": "Thomas Gonzalez",
        "daughters": [{
            "age": 23,
            "name": "Brenda",
            "husband": {
                "age": 30,
                "name": "George"
            }
        }, {
            "age": 30,
            "name": "Dorothy",
            "husband": {
                "age": 23,
                "name": "Brian"
            }
        }]
    }, {
        "age": 41,
        "name": "James Lee",
        "daughters": [{
            "age": 20,
            "name": "Sarah",
            "husband": {
                "age": 24,
                "name": "Frank"
            }
        }, {
            "age": 21,
            "name": "Carol",
            "husband": {
                "age": 28,
                "name": "Larry"
            }
        }]
    }, {
        "age": 58,
        "name": "Kenneth Brown",
        "daughters": [{
            "age": 23,
            "name": "Ruth",
            "husband": {
                "age": 24,
                "name": "Brian"
            }
        }, {
            "age": 18,
            "name": "Lisa",
            "husband": {
                "age": 24,
                "name": "Scott"
            }
        }, {
            "age": 27,
            "name": "Sandra",
            "husband": {
                "age": 31,
                "name": "Charles"
            }
        }]
    }, {
        "age": 50,
        "name": "Thomas Lee",
        "daughters": [{
            "age": 27,
            "name": "Patricia",
            "husband": {
                "age": 30,
                "name": "Scott"
            }
        }, {
            "age": 21,
            "name": "Jennifer",
            "husband": {
                "age": 23,
                "name": "George"
            }
        }]
    }, {
        "age": 50,
        "name": "Robert Anderson",
        "daughters": [{
            "age": 24,
            "name": "Angela",
            "husband": {
                "age": 23,
                "name": "James"
            }
        }]
    }]
};
var jsonQobj = jsonQ(JsonObject);

// console.log(JsonObject);

// console.log(jsonQobj.find('name').value());
let out = jsonQobj.find('name', function () {

    return this[0].toLowerCase() == 'm'
});

let out2 = jsonQobj.find('husband', function(){

     return this.age > 2;
});
//console.log(out2.value());


var family = jsonQobj.find('name', function(){
    return this[0].toLowerCase() == 'a'
});

var age = family.sibling('age');

//console.log(age.value());

let personObj = jsonQobj.find('age', function(){

    return this > 30;
}).parent();


personObj.each(function(index, path, value){

     console.log(value.name + ' '+ value.age);
});

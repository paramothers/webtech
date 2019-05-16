//using prototype

let commonThings = {
    f: function() {},
    g: function() {}
}

function thins(){

    let o = Object.create(commonThings);
    o.x = 45;
    o.y = 88;

    return o;
}

let temp = thins();
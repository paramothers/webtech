function Shape(){

}

Shape.prototype.name = 'Shape';
Shape.prototype.toString =  function(){
    return this.name;
}

function TwoDShape(){

}

let F = function(){}
F.prototype = Shape.prototype;

TwoDShape.prototype = new F();
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.prototype.name = '2d Shape';

function Triangle(side, height){
    this.side = side;
    this.height = height;
}

let F = function() {}
F.prototype = TwoDShape.prototype;
Triangle.prototype = new F();
Triangle.prototype.constructor = Triangle;

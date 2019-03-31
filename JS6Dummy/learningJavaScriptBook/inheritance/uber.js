function Shape(){}

Shape.prototype.name = 'Shape';
Shape.prototype.toString = function(){
    let construct = this.constructor;
    return construct.uber
      ? this.construct.uber.toString()
      : this.name;
}

function TwoDShape() {

}

let F = function(){};
F.prototype = Shape.prototype;

TwoDShape.prototype = new F();
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.uber = Shape.prototype;

TwoDShape.prototype.name = '2D shape';

function Triangle(side, height) {
    this.side = side;
    this.height = height;
}

let F1 = function(){};
F.prototype = TwoDShape.prototype;
Triangle.prototype = new F1();
Triangle.prototype.constructor = Triangle;
Triangle.uber = TwoDShape.prototype;

Triangle.prototype.name = 'Triangle';
Triangle.prototype.gerArea = function(){
    return this.side*this.height;
}

let my = new Triangle(4,6);
console.dir(my.toString());
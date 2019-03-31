
function Shape(){

    this.name = 'Shape';
    this.toString = function(){
        return this.name;
    };
}

function TwoDShape() {

    this.name = '2D shape';
}

function Triangle(side, height) {

    this.name = 'Triangle';
    this.side = side;
    this.height = height;
    this.getArea = function () {

        return this.side * this.height;
    }
}

TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();

let my = new Triangle(5,10);
console.log(my.getArea());
console.log(my.toString());
console.log(my.constructor);
console.log(my  instanceof Shape);
console.log(my  instanceof TwoDShape);
console.log(my  instanceof Triangle);

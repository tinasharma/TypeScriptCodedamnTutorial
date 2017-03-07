class rectangle {
    _perimeter:number; side1:number; side2:number;

    constructor() {
        console.log("hello");
    }

    get area():number {
        return this.side1 * this.side2; 
    }

    set perimeter(length:number) {
        this._perimeter = length;
    }

    set oneside(side:number) {
        this.side1 = side;
        this.side2 = (this._perimeter- 2*this.side1)/2;
    }
    printAllInfo() {
        console.log("Perimeter: " + this._perimeter + " Side1: " + this.side1 + " Side2: " + this.side2);
    }
}

var myRectangle = new rectangle();
myRectangle.perimeter = 10;
myRectangle.oneside = 2.5;

myRectangle.printAllInfo();
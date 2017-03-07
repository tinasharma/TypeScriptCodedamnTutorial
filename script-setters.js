var rectangle = (function () {
    function rectangle() {
        console.log("hello");
    }
    Object.defineProperty(rectangle.prototype, "area", {
        get: function () {
            return this.side1 * this.side2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(rectangle.prototype, "perimeter", {
        set: function (length) {
            this._perimeter = length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(rectangle.prototype, "oneside", {
        set: function (side) {
            this.side1 = side;
            this.side2 = (this._perimeter - 2 * this.side1) / 2;
        },
        enumerable: true,
        configurable: true
    });
    rectangle.prototype.printAllInfo = function () {
        console.log("Perimeter: " + this._perimeter + " Side1: " + this.side1 + " Side2: " + this.side2);
    };
    return rectangle;
}());
var myRectangle = new rectangle();
myRectangle.perimeter = 10;
myRectangle.oneside = 2.5;
myRectangle.printAllInfo();

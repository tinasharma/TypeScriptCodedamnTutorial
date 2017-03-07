var rectangle = (function () {
    function rectangle(l1, l2) {
        this.l1 = l1;
        this.l2 = l2;
    }
    Object.defineProperty(rectangle.prototype, "area", {
        get: function () {
            return this.l1 * this.l2;
        },
        enumerable: true,
        configurable: true
    });
    return rectangle;
}());
var myRectangle = new rectangle(10, 20);
console.log(myRectangle.area);

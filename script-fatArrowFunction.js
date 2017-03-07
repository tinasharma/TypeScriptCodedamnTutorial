//Lambda functions
var car = (function () {
    function car() {
        this.gasAmount = 0;
        this.carObj = document.getElementById("playerCar");
    }
    /*
    The below doesn't work.
    Use Lambda function instead
    run():void {
        setInterval(function() {
            this.gasAmount++;
            this.carObj.innerText = this.gasAmount;
        },500);
    }
    */
    car.prototype.run = function () {
        var _this = this;
        setInterval(function () {
            _this.gasAmount++;
            _this.carObj.innerText = _this.gasAmount.toString();
        }, 500);
    };
    return car;
}());
var myCar = new car();
myCar.run();

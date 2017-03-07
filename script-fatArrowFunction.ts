//Lambda functions

class car {
    gasAmount:number;
    carObj:HTMLElement;

    constructor() {
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

    run():void {
        setInterval(
             () => {
            this.gasAmount++;
            this.carObj.innerText = this.gasAmount.toString();
        },500);
    }
}

var myCar = new car();
myCar.run();
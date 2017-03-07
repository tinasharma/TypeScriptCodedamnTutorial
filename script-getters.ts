class rectangle {
    l1:number;
    l2:number;
    
    constructor(l1:number, l2:number) {
        this.l1 = l1;
        this.l2= l2;
    }

    get area() {
        return this.l1 * this.l2; 
    }
}

var myRectangle = new rectangle(10,20);

console.log(myRectangle.area);
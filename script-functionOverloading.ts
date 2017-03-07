function areaofQuad(side1:number);
function areaofQuad(side1:number, side2:number);
function areaofQuad(side1:number, side2:number, side3:number, side4:number);

function areaofQuad(side1:number, side2?:number, side3?:number, side4?:number) {
    if (side2 === undefined && side3 === undefined && side4 === undefined) {
        return side1*side1;
    }
    else if(side3 === undefined && side4 === undefined) {
        return side1 * side2;
    }
    return side1*side2*side3*side4; //this is not how you calculate area pf trapezium
}

console.log(areaofQuad(1)); //square
console.log(areaofQuad(1,2)); //rectangle
console.log(areaofQuad(1,2,3,4)); //trapezium
//console.log(areaofQuad(1,2,3)); //this will throw an error, thanks to the function overloading

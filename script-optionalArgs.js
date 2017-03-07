function areaOfSquare(side, isInteger) {
    if (isInteger) {
        return Math.floor(side * side);
    }
    return side * side;
}
console.log(areaOfSquare(5.25));
console.log(areaOfSquare(5.25, true));
console.log(areaOfSquare(5.25, false));

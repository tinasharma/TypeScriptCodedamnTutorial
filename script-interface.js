function operate(x) {
    return x.side * x.side;
}
var calc = operate({ shape: "square", side: 5 });
console.log(calc);

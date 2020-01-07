function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return 'Error, no se puede dividir entre 0!';
    }
    else {
        return a / b;
    }
}
function start(a, b) {
    var resultAdd = add(a, b);
    var resultSubstract = substract(a, b);
    var resultMultiply = multiply(a, b);
    var resultDivide = divide(a, b);
    return "Suma: " + resultAdd + ", resta: " + resultSubstract + ", multiplicaci\uFFFDn: " + resultMultiply + ", divisi\uFFFDn: " + resultDivide;
}
console.log(start(2, 4));

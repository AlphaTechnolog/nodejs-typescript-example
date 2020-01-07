function add(a:number, b:number):number {
    return a + b;
}

function substract(a:number, b:number):number {
    return a - b;
}

function multiply(a:number, b:number):number {
    return a * b;
}

function divide(a:number, b:number):any {
    if (b === 0) {
        return 'Error, no se puede dividir entre 0!';
    } else {
	return a / b;
    }
}

function start(a:number, b:number):string {
    const resultAdd = add(a, b);
    const resultSubstract = substract(a, b);
    const resultMultiply = multiply(a, b);
    const resultDivide = divide(a, b);

    return `Suma: ${resultAdd}, resta: ${resultSubstract}, multiplicación: ${resultMultiply}, división: ${resultDivide}`;
}

console.log(start(2, 4));

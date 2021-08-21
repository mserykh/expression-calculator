const operations = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
    '/' : (a, b) => a / b,
};

function expressionCalculator(expr) {
    const expression = expr.replace(/\s/g, '');

    if (expression.includes('/0')) {
        throw "TypeError: Division by zero.";
    }

    const symbols = expression.split('').filter(element => element === '+' || element === '-' || element === '*' || element === '/');
    
    const operands = expression.split(/[+,\-,*,\/]/);
    console.log(operands);
    console.log(symbols);
    let result = Number(operands[0]);
    for (let i = 0; i < symbols.length; i++) {
        result = operations[symbols[i]](result, Number(operands[i + 1]));
    }

    return result;
}

module.exports = {
    expressionCalculator
}
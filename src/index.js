const operations = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
    '/' : (a, b) => a / b,
};

function checkDivisionByZero(expression) {
    if (expression.includes('/0')) {
        throw "TypeError: Division by zero.";
    }
}

function checkBrackets(expression) {
    const bracketsLeft = expression.match(/[(]/g);
    const bracketsRight = expression.match(/[)]/g);

    if (bracketsLeft === null || bracketsRight === null || bracketsLeft.length !== bracketsRight.length) {
        throw "ExpressionError: Brackets must be paired";
    }
}

function expressionCalculator(expr) {
    const expression = expr.replace(/\s/g, '');

    checkDivisionByZero(expression);
    if (/[(,)]/.test(expression)) checkBrackets(expression);

    const symbols = expression.split('').filter(element => element === '+' || element === '-' || element === '*' || element === '/');
    const operands = expression.split(/[+,\-,*,\/]/);
    
    let result = Number(operands[0]);
    for (let i = 0; i < symbols.length; i++) {
        result = operations[symbols[i]](result, Number(operands[i + 1]));
    }

    return result;
}

module.exports = {
    expressionCalculator
}
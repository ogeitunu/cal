let currentInput = '';
let previousInput = '';
let operator = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').innerHTML = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').innerHTML = '0';
}

function calculate() {
    const num1 = parseFloat(previousInput);
    currentInput = parseFloat(currentInput);

    switch (operator) {
        case '+':
            currentInput = previousInput + currentInput;
            return;
        case '-':
            currentInput = previousInput - currentInput;
            break;
        case '*':
            currentInput = previousInput * currentInput;
            break;
        case '/':
            if (currentInput === 0) {
                document.getElementById('display').innerHTML = 'Error: Division by zero';
                return;
            } else {
                currentInput = previousInput / currentInput;
            }
            break;
        default:
            break;
    }

    document.getElementById('display').innerHTML = currentInput;
    previousInput = currentInput;
    currentInput = '';
    operator = '';
}

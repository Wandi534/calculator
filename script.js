
const screen = document.getElementById('screen');

const buttons = document.querySelectorAll('.button');
let currentInput = '0';
let operator = '';
let firstOperand = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'C') {
            currentInput = '0';
            operator = '';
            firstOperand = null;
        } else if (buttonText === '=') {
            if (firstOperand !== null && operator !== '') {
                currentInput = calculate(firstOperand, currentInput, operator);
                firstOperand = null;
                operator = '';
            }
        } else if (['+', '-', '×', '÷'].includes(buttonText)) {

            if (firstOperand === null) {
                firstOperand = currentInput;
                operator = buttonText;
                currentInput = '';
            }
        } else {
            if (currentInput === '0' && buttonText !== '.') {
                currentInput = buttonText;
            } else {
                currentInput += buttonText;
            }
        }

        screen.textContent = currentInput;
    });
});

// Function to calculate the result
function calculate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case '+': return (a + b).toString();
        case '-': return (a - b).toString();
        case '×': return (a * b).toString();
        case '÷': return (a / b).toString();
        default: return b.toString();
    }
}

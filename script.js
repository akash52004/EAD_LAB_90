function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.innerText += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression
        const result = eval(display.innerText);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}

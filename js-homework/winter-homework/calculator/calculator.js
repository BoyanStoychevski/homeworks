let currentNumber = '';
let previousNumber = '';
let operation = null;
let calcInput = document.getElementById('display');

function appendNumber(number) {
    currentNumber = currentNumber + number;
    calcInput.value = currentNumber;
}

function setOperation(operationCharacter) {
    if (currentNumber === '') {
        return;
    }
    if (previousNumber !== '') {
        calculate();
    }
    operation = operationCharacter;
    console.log("currentNumber", currentNumber);
    console.log("previousNumber", currentNumber);
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    if (operation === null || currentNumber === '' || previousNumber === '') {
        return;
    }
    const prev = Number(previousNumber);
    const curr = Number(currentNumber);
    let result;

    if (operation === '+') {
        result = prev + curr;
    } else if (operation === '-') {
        result = prev - curr;
    } else if (operation === '*') {
        result = prev * curr;
    } else if (operation === '/') {
        result = prev / curr;
    } else {
        return;
    }


    currentNumber = result.toString();
    operation = null;
    previousNumber = '';
    calcInput.value = currentNumber;
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    calcInput.value = currentNumber;
}




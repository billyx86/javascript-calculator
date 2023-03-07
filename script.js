const plusSign = document.getElementById("+");
const subtractSign = document.getElementById("-");
const multiplySign = document.getElementById("x");
const divideSign = document.getElementById("/");
const equalsSign = document.getElementById("=");

const clearScreen = document.getElementById("C");
const clearMemory = document.getElementById("AC");

const calcScreen = document.getElementById("calcScreen");
const numberButton = document.querySelectorAll(".num-button");

let currentOperation;
let initialNumber = 0;
let secondNumber = 0;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operation) {
    switch(operation) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            return "Illegal operation";
    }
}

plusSign.addEventListener("click", function() {
    initialNumber = parseFloat(calcScreen.textContent);
    currentOperation = "add";
    calcScreen.textContent = 0;
})

subtractSign.addEventListener("click", function() {
    initialNumber = parseFloat(calcScreen.textContent);
    currentOperation = "subtract";
    calcScreen.textContent = 0;
})

multiplySign.addEventListener("click", function() {
    initialNumber = parseFloat(calcScreen.textContent);
    currentOperation = "multiply";
    calcScreen.textContent = 0;
})

divideSign.addEventListener("click", function() {
    initialNumber = parseFloat(calcScreen.textContent);
    currentOperation = "divide";
    calcScreen.textContent = 0;
})

equalsSign.addEventListener("click", function() {
    secondNumber = parseFloat(calcScreen.textContent);
    calcScreen.textContent = operate(initialNumber, secondNumber, currentOperation);
})

clearScreen.addEventListener("click", function() {
    calcScreen.textContent = "0";
})

clearMemory.addEventListener("click", function() {
    calcScreen.textContent = "0";
    initialNumber = "0";
    currentOperation = "0";
})

for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", function() {
        if(calcScreen.textContent === "0") {
            calcScreen.textContent = numberButton[i].textContent;
        } else {
            calcScreen.textContent += numberButton[i].textContent;
        }
    });
}

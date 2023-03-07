const plusSign = document.getElementById("+");
const subtractSign = document.getElementById("-");
const multiplySign = document.getElementById("x");
const divideSign = document.getElementById("/");
const equalsSign = document.getElementById("=");

const clearScreen = document.getElementById("C");
const clearMemory = document.getElementById("AC");

const calcScreen = document.getElementById("calcScreen");
const numberButton = document.querySelectorAll(".num-button");
const decimalButton = document.querySelector(".decimal-button");

let screenReset = false;
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
            return calcScreen.textContent;
    }
}

plusSign.addEventListener("click", function() {
    if(initialNumber !== 0) {
        secondNumber = parseFloat(calcScreen.textContent);
        calcScreen.textContent = operate(initialNumber, secondNumber, currentOperation);
    }
    initialNumber = parseFloat(calcScreen.textContent);
    currentOperation = "add";
    screenReset = true;
})

subtractSign.addEventListener("click", function() {
    if(initialNumber !== 0) {
        secondNumber = parseFloat(calcScreen.textContent);
        calcScreen.textContent = operate(initialNumber, secondNumber, currentOperation);
    }
    initialNumber = parseFloat(calcScreen.textContent);
    currentOperation = "subtract";
    screenReset = true;
})

multiplySign.addEventListener("click", function() {
    if(initialNumber !== 0) {
        secondNumber = parseFloat(calcScreen.textContent);
        calcScreen.textContent = operate(initialNumber, secondNumber, currentOperation);
    }
    initialNumber = parseFloat(calcScreen.textContent);
    currentOperation = "multiply";
    screenReset = true;
})

divideSign.addEventListener("click", function() {
    if(initialNumber !== 0) {
        secondNumber = parseFloat(calcScreen.textContent);
        calcScreen.textContent = operate(initialNumber, secondNumber, currentOperation);
    }
    initialNumber = parseFloat(calcScreen.textContent);
    currentOperation = "divide";
    screenReset = true;
})

equalsSign.addEventListener("click", function() {
    secondNumber = parseFloat(calcScreen.textContent);
    calcScreen.textContent = operate(initialNumber, secondNumber, currentOperation);
})

clearScreen.addEventListener("click", function() {
    calcScreen.textContent = "0";
    screenReset = true;
})

clearMemory.addEventListener("click", function() {
    calcScreen.textContent = "0";
    initialNumber = 0;
    secondNumber = 0;
    currentOperation = "0";
    screenReset = true;
})

for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", function() {
        if(calcScreen.textContent === "0" || screenReset) {
            calcScreen.textContent = numberButton[i].textContent;
            screenReset = false;
        } else {
            calcScreen.textContent += numberButton[i].textContent;
        }
    });
}

decimalButton.addEventListener("click", function() {
    if(!calcScreen.textContent.includes(".")) {
        calcScreen.textContent += decimalButton.textContent;
        screenReset = false;
    }
})
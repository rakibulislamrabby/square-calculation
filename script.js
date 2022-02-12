
function squareNumber() {
    let inputNumberText = document.getElementById("input-number").value;
    let inputNumber = parseFloat(inputNumberText);


    const outputNumber = document.getElementById("output-field");
    const outputNumberText = outputNumber.innerText;
    const outputNumberFinal = parseFloat(outputNumberText);
    const result = Math.pow(inputNumber, 2);
    outputNumber.innerText = result;
}

function rootNumber() {
    let inputNumberText = document.getElementById("input-number").value;
    let inputNumber = parseFloat(inputNumberText);


    const outputNumber = document.getElementById("root-output");
    const outputNumberText = outputNumber.innerText;
    const outputNumberFinal = parseFloat(outputNumberText);
    const result = Math.sqrt(inputNumber, 2);
    outputNumber.innerText = result;
}
/*
function calculation(inputId) {

    const inputField = document.getElementById(inputId);
    const inputNumberText = inputField.value;
    const inputNumber = parseFloat(inputNumberText);
    const result = Math.pow(inputNumber, 2);
    inputField.value = "";
    return result;
}

function outputField(inputId, amount) {
    const outputNumber = document.getElementById(inputId);
    const outputNumberText = outputNumber.innerText;
    const outputNumberFinal = parseFloat(outputNumberText);
    outputNumber.innerText = amount;
}

function rootNumber(inputId) {
    debugger;
    const rootfield = document.getElementById(inputId);
    const rootNumberText = rootfield.value;
    const rootNumber = parseFloat(rootNumberText);
    const result = Math.sqrt(rootNumber);
    return result;
}


// document.getElementById("square-button").addEventListener("click", function () {
//     const inputField = calculation("input-number");
//     outputField("output-field", inputField);
//     const rootfield = rootNumber("input-number");
//     outputField("root-output", rootfield);

// })
*/
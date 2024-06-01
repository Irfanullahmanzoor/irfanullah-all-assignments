let display = document.getElementById('display')

function button(input) {
    display.value += input;
}

function allClear() {
    display.value = "";
}

function del() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    display.value = eval(display.value)
}

// let displayValue = "";
// function button(value) {
//     displayValue += value;
//     document.getElementById("display").value = displayValue;
// }


// function clearDisplay() {
//     displayValue = "";
//     document.getElementById("display").value = displayValue;
// }


// function calculateResult() {
//     try {
//         displayValue = eval(displayValue);
//         document.getElementById("display").value = displayValue;
//     } catch (error) {
//         document.getElementById("display").value = "Error";
//     }
// }
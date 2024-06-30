// script.js
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = "";
    let operator = null;
    let operand1 = null;
    let operand2 = null;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (value === "C") {
                currentInput = "";
                operator = null;
                operand1 = null;
                operand2 = null;
                display.textContent = "";
            } else if (value === "=") {
                operand2 = parseFloat(currentInput);
                if (operator && operand1 !== null && operand2 !== null) {
                    let result;
                    switch (operator) {
                        case "+":
                            result = operand1 + operand2;
                            break;
                        case "-":
                            result = operand1 - operand2;
                            break;
                        case "*":
                            result = operand1 * operand2;
                            break;
                        case "/":
                            result = operand1 / operand2;
                            break;
                    }
                    display.textContent = result;
                    currentInput = result;
                    operator = null;
                    operand1 = null;
                    operand2 = null;
                }
            } else if (button.classList.contains("operator")) {
                if (currentInput !== "") {
                    operand1 = parseFloat(currentInput);
                    operator = value;
                    currentInput = "";
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});

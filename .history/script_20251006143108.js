const display = document.getElementById('display');
const numButtons = document.querySelectorAll("num");
const opButtons = document.querySelectorAll("op");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");

let currentInput = "";
let operator = "";
let previousInput = "";

// Add event listeners to number buttons
numButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentInput += btn.dataset.num;
        display.value = currentInput;
    });
});

// Add event listeners to operator buttons
opButtons.forEach(btn => {
    btn.addEventListener("click",()=> {
        if(currentInput === "") return; // Prevent operator input without a number
        if(previousInput !== "") {
            // If there's a previous input, calculate the result first
            calculate();
        }
        operator = btn.dataset.op;
    });
})
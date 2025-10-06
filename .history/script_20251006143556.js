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
        previousInput = currentInput;

    });
});

//Event listener for equals button
equalsBtn.addEventListener("click", () => {
    if(currentInput === "" || previousInput === "") return; // Prevent calculation without complete inputs   
    calculate();
    operator = "";
});


//Event listener for clear button
clearBtn.addEventListener("click", () => {
    currentInput = "";
    previousInput = "";
    operator = "";
    display.value = "";
});

// Calculation function
function calculate(){
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch(operator){
        case '+': result = prev + current; 
    }
}
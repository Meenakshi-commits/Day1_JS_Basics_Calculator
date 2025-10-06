# Day1_JS_Basics_Calculator

A **simple calculator** built with **HTML, CSS, and JavaScript** to practice JS basics such as **variables, operators, functions, DOM manipulation, and event handling**. This project is suitable for beginners learning JavaScript step by step.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Folder Structure](#folder-structure)
3. [HTML Explanation](#html-explanation)
4. [CSS Explanation](#css-explanation)
5. [JavaScript Explanation](#javascript-explanation)
6. [How to Run Locally](#how-to-run-locally)
7. [Deployment](#deployment)
8. [Future Enhancements](#future-enhancements)

---

## Project Overview

This is a **basic calculator** that can perform **addition, subtraction, multiplication, and division**.  

**Features:**  
- Number input (0–9)  
- Four basic operators (+, -, *, /)  
- Clear (`C`) button  
- Equals (`=`) button  
- Display of current input and results  
- Uses **JavaScript variables, conditionals, functions, and DOM events**  

**Learning Goals:**  
- Understand **JS syntax, data types, operators**  
- Practice **DOM selection and event handling**  
- Learn to **update HTML dynamically using JS**  

---

## Folder Structure

Day1_JS_Basics_Calculator/
│
├─ index.html # HTML structure of calculator
├─ style.css # CSS styling for layout and buttons
├─ script.js # JavaScript logic for calculator functionality
└─ README.md # This file


---

## HTML Explanation

``html
<div class="calculator">
  <h2>Simple Calculator</h2>
  <input type="text" id="display" placeholder="0" disabled>

  <div class="buttons">
    <button class="num" data-num="7">7</button>
    <button class="num" data-num="8">8</button>
    <button class="num" data-num="9">9</button>
    <button class="op" data-op="/">/</button>
    ...
    <button class="clear">C</button>
    <button class="equals">=</button>
  </div>
</div>
Explanation:

display → input field to show typed numbers or results. Disabled to prevent manual typing.

Buttons:

.num → number buttons (0–9), with data-num attribute storing their value.

.op → operator buttons (+, -, *, /), with data-op storing operator.

.clear → clears all inputs.

.equals → performs calculation.

data-* attributes → used to store custom data for each button.

CSS Explanation

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 10px;
}

button {
  width: 50px;
  height: 50px;
  font-size: 1.2rem;
  cursor: pointer;
}
display: grid; → sets a grid layout for buttons.

grid-template-columns: repeat(4, 1fr); → 4 equal-width columns.

gap: 10px; → spacing between buttons.

margin-top: 10px; → space above buttons from display.

Button styling sets uniform size, font, and pointer cursor.

JavaScript Explanation
let currentInput = "";
let operator = "";
let previousInput = "";


currentInput → number currently being typed.

previousInput → previous number stored after operator is clicked.

operator → stores which operator (+, -, *, /) was clicked.

Handling Numbers
numButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentInput += btn.dataset.num;
    display.value = currentInput;
  });
});


Appends clicked number to currentInput

Updates the display

Example: Click 7 → display shows 7. Click 3 → display shows 73.

Handling Operators
opButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentInput === "") return;
    if (previousInput !== "") calculate();
    operator = btn.dataset.op;
    previousInput = currentInput;
    currentInput = "";
  });
});


Stores operator and previous number

Resets current input for next number

If a previous calculation exists, performs it automatically

Example: 7 + 3 → click + → previousInput = 7, currentInput = "", operator = "+".

Equals and Clear
equalsBtn.addEventListener("click", () => {
  if (currentInput === "" || previousInput === "") return;
  calculate();
  operator = "";
});

clearBtn.addEventListener("click", () => {
  currentInput = "";
  previousInput = "";
  operator = "";
  display.value = "";
});


= calls calculate() to compute result

C clears all inputs

Calculation Function
function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);

  switch(operator) {
    case "+": result = prev + curr; break;
    case "-": result = prev - curr; break;
    case "*": result = prev * curr; break;
    case "/": result = prev / curr; break;
    default: return;
  }

  display.value = result;
  currentInput = result;
  previousInput = "";
}


Converts string inputs to numbers using parseFloat()

Performs operation based on operator

Updates display and allows chained calculations

Example:

7 + 3 = → display shows 10

Next press * 2 = → display shows 20

How to Run Locally

Open the project folder.

Open index.html in browser.

Alternatively, use VS Code Live Server:

Install Live Server extension → Right-click index.html → Open with Live Server.

Click buttons to test calculator.

Deployment (Optional)

Push project folder to GitHub.

Use Netlify or Vercel to host live version.

Drag-and-drop folder or connect GitHub repo.

Future Enhancements

Add decimal numbers and negative numbers

Add keyboard support

Improve UI with colors, themes, animations

Add percentage, square root, and memory functions

Made with ❤️ by [MEENAKSHI]


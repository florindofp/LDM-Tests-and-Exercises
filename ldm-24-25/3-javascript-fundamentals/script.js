// --- 1. Correct Use of Variables (let, const, var) ---
// Explanation:
// - var: Older way of declaring variables. Function-scoped. Can be re-declared and updated.
// - let: Block-scoped. Can be updated but not re-declared.
// - const: Block-scoped. Cannot be updated or re-declared. Used for constants.

console.log("--- Variables ---");

var varVariable = "I'm a var";
let letVariable = "I'm a let";
const constVariable = "I'm a const";

console.log("varVariable:", varVariable);
console.log("letVariable:", letVariable);
console.log("constVariable:", constVariable);

// Example of updating let
letVariable = "I've been updated!";
console.log("Updated letVariable:", letVariable);

// Example of error (uncomment to see the error)
// constVariable = "Trying to change a const"; // This will cause an error

// --- 2. How to Use Comments ---
// Explanation:
// - Single-line comments: // This is a single-line comment.
// - Multi-line comments: /* This is a
//                          multi-line comment */

console.log("--- Comments ---");
console.log("Comments are for explaining code!");

// --- 3. If Statement Uses ---
// Explanation:
// - if: Executes a block of code if a condition is true.
// - else if: Checks another condition if the previous if was false.
// - else: Executes a block of code if all previous conditions were false.

console.log("--- If Statement ---");

let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else if (age >= 13) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");
}

// --- 4. Use of Loops (for) ---
// Explanation:
// - for: Repeats a block of code a specific number of times.

console.log("--- For Loop ---");

for (let i = 0; i < 5; i++) {
    console.log("Loop iteration:", i);
}

// --- 5. Switch Case Use ---
// Explanation:
// - switch: Selects one of many code blocks to be executed based on a value.

console.log("--- Switch Case ---");

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's almost the weekend!");
        break;
    default:
        console.log("It's a regular day.");
}

// --- 6. Definition and Correct Use of Functions ---
// Explanation:
// - function: A block of code designed to perform a particular task.

console.log("--- Functions ---");

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Student"); // Calling the function

function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log("Sum:", sum);

// --- 7. Array Iteration Using Different Methods ---
// Explanation:
// - for loop: Traditional way to iterate through an array.
// - forEach(): Executes a provided function once for each array element.
// - map(): Creates a new array with the results of calling a provided function on every element.
// - filter(): Creates a new array with all elements that pass a test.

console.log("--- Array Iteration ---");

let numbers = [1, 2, 3, 4, 5];

console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("Using forEach:");
numbers.forEach(function (number) {
    console.log(number);
});

console.log("Using map:");
let doubledNumbers = numbers.map(function (number) {
    return number * 2;
});
console.log("Doubled numbers:", doubledNumbers);

console.log("Using filter:");
let evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log("Even numbers:", evenNumbers);

// Display array in the html
const arrayOutput = document.getElementById("array-output");
doubledNumbers.forEach(number => {
    const li = document.createElement("li");
    li.textContent = number;
    arrayOutput.appendChild(li);
});

// --- 8. Use of document.getElementById(), querySelector(), getElementsByClassName() ---
// Explanation:
// - getElementById(): Returns the element with the specified ID.
// - querySelector(): Returns the first element that matches a CSS selector.
// - getElementsByClassName(): Returns a collection of elements with the specified class name.

console.log("--- DOM Selection ---");

let messageElement = document.getElementById("message");
console.log("Element by ID:", messageElement);

let firstBox = document.querySelector(".dom-box");
console.log("First element by class:", firstBox);

let allBoxes = document.getElementsByClassName("dom-box");
console.log("All elements by class:", allBoxes);

// --- 9. DOM Edition (element.innerHTML, element.style) ---
// Explanation:
// - element.innerHTML: Sets or gets the HTML content of an element.
// - element.style: Sets or gets the inline CSS styles of an element.

console.log("--- DOM Edition ---");

messageElement.innerHTML = "<b>The message has been changed!</b>";

let domText = document.getElementById("dom-text");
domText.style.color = "blue";
domText.style.fontSize = "20px";

//Change the background color of the boxes
for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].classList.add("red-background");
}

// --- 10. Use of Console Methods (console.log(), console.error(), console.warn()) ---
// Explanation:
// - console.log(): Logs a message to the console.
// - console.error(): Logs an error message to the console.
// - console.warn(): Logs a warning message to the console.

console.log("--- Console Methods ---");
console.log("This is a log message.");
console.error("This is an error message.");
console.warn("This is a warning message.");

// --- 11. Use of the Browser DevTools Inspect ---
// Explanation:
// - Right-click on the page and select "Inspect" or "Inspect Element".
// - You can see the HTML structure, CSS styles, and JavaScript console.
// - You can debug your code, see console messages, and more.
console.log("--- DevTools Inspect ---");
console.log("Right-click on the page and select 'Inspect' to open DevTools.");

// Example of button click
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
    console.log("Button clicked!");
    messageElement.innerHTML = "<b>Button Clicked!</b>";
});

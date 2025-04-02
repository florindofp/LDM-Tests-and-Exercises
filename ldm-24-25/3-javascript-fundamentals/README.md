# JavaScript Fundamentals - Core Concepts

This project demonstrates fundamental JavaScript concepts, covering variables, control flow, functions, array manipulation, DOM interaction, and debugging techniques.

## Table of Contents

1.  [Correct Use of Variables (let, const, var)](#1-correct-use-of-variables-let-const-var)
2.  [How to Use Comments](#2-how-to-use-comments)
3.  [If Statement Uses](#3-if-statement-uses)
4.  [Use of Loops (for)](#4-use-of-loops-for)
5.  [Switch Case Use](#5-switch-case-use)
6.  [Definition and Correct Use of Functions](#6-definition-and-correct-use-of-functions)
7.  [Array Iteration Using Different Methods](#7-array-iteration-using-different-methods)
8.  [Use of document.getElementById(), querySelector(), getElementsByClassName()](#8-use-of-documentgetelementbyid-queryselector-getelementsbyclassname)
9.  [DOM Edition (element.innerHTML, element.style)](#9-dom-edition-elementinnerhtml-elementstyle)
10. [Use of Console Methods (console.log(), console.error(), console.warn())](#10-use-of-console-methods-consolelog-consoleerror-consolewarn)
11. [Use of the Browser DevTools Inspect](#11-use-of-the-browser-devtools-inspect)

## Concepts Explained

### 1. Correct Use of Variables (let, const, var)

*   **`var`**:
    *   Older way of declaring variables.
    *   Function-scoped.
    *   Can be re-declared and updated.
*   **`let`**:
    *   Block-scoped.
    *   Can be updated but not re-declared.
*   **`const`**:
    *   Block-scoped.
    *   Cannot be updated or re-declared.
    *   Used for constants (values that should not change).

**Example:**

```javascript
var varVariable = "I'm a var";
let letVariable = "I'm a let";
const constVariable = "I'm a const";

letVariable = "I've been updated!"; // Allowed
// constVariable = "Trying to change a const"; // Error!

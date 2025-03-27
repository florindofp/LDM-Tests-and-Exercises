// Method 1: Using querySelectorAll (Recommended for most cases)

// This method returns a NodeList (similar to an array) of all elements with the specified class.
const elementsByClass = document.querySelectorAll('.your-class-name');

// Example: Let's say you have elements like this in your HTML:
// <div class="my-box">Box 1</div>
// <p class="my-box">Box 2</p>
// <span class="my-box">Box 3</span>

const myBoxes = document.querySelectorAll('.my-box');

// Now, myBoxes is a NodeList containing all elements with the class "my-box".
// You can iterate through it like this:
myBoxes.forEach(box => {
  console.log(box.textContent); // Output: Box 1, Box 2, Box 3
  // You can also modify the elements here:
  box.style.backgroundColor = 'lightblue';
});

// Or access them by index:
if (myBoxes.length > 0) {
  console.log(myBoxes[0].textContent); // Output: Box 1
}

// Method 2: Using getElementsByClassName (Older method, still works)

// This method returns an HTMLCollection (also similar to an array) of all elements with the specified class.
const elementsByClassName = document.getElementsByClassName('your-class-name');

// Example: Using the same HTML as above:

const myBoxes2 = document.getElementsByClassName('my-box');

// Now, myBoxes2 is an HTMLCollection containing all elements with the class "my-box".
// You can iterate through it like this (note: it's not a true array, so forEach is not directly available):
for (let i = 0; i < myBoxes2.length; i++) {
  console.log(myBoxes2[i].textContent); // Output: Box 1, Box 2, Box 3
  myBoxes2[i].style.border = '1px solid red';
}

// Or access them by index:
if (myBoxes2.length > 0) {
  console.log(myBoxes2[0].textContent); // Output: Box 1
}

// Important Considerations:

// 1. NodeList vs. HTMLCollection:
//    - NodeList (from querySelectorAll) is generally preferred because it's more versatile and supports modern array methods like forEach.
//    - HTMLCollection (from getElementsByClassName) is "live," meaning it updates automatically if the DOM changes. NodeList is usually static (unless you use a live NodeList).
//    - In most cases, the difference is not significant, but querySelectorAll is generally recommended.

// 2. Multiple Classes:
//    - If you need to select elements with multiple classes, use querySelectorAll with CSS selectors:
//      const elementsWithMultipleClasses = document.querySelectorAll('.class1.class2'); // Elements with both class1 AND class2
//      const elementsWithOneOfClasses = document.querySelectorAll('.class1, .class2'); // Elements with class1 OR class2

// 3. Specificity:
//    - You can use more specific selectors with querySelectorAll:
//      const specificElements = document.querySelectorAll('div.my-box'); // Only divs with the class "my-box"
//      const nestedElements = document.querySelectorAll('.container .my-box'); // Elements with class "my-box" that are inside an element with class "container"

// 4. When to use getElementsByClassName:
//    - getElementsByClassName is still useful when you need a live collection, or when you are working with older codebases.
//    - It can be slightly faster than querySelectorAll in some very specific cases, but the difference is usually negligible.

// In summary:
// - For most cases, use `document.querySelectorAll('.your-class-name')`.
// - If you need a live collection or are working with older code, use `document.getElementsByClassName('your-class-name')`.

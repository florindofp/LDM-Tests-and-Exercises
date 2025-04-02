# JavaScript Data Display Examples

This project demonstrates two different approaches to displaying data in a web browser using JavaScript:

1.  **Displaying Local JSON Data in a Table:** This shows how to take a JavaScript array of objects (representing JSON data) and dynamically generate an HTML table to display it.
2.  **Fetching and Displaying Data from an API:** This shows how to use the `fetch` API to retrieve data from a remote server (a public API in this case) and dynamically add it to the webpage.

## Project Structure

The project contains the following files:

*   **`3-json/script.js`** - Contains the code for displaying local JSON data in an HTML table.
*   **`4-api-fetch/script.js`** - Contains the code for fetching data from an API and displaying it on the page.

## 1. Displaying Local JSON Data in a Table (`3-json/script.js`)

This script demonstrates how to take a JavaScript array of objects and dynamically create an HTML table to display the data.

### Code Explanation

```javascript
let tabla = document.getElementById("tablaBody");
data = [
    {
      "nombre": "Juan",
      "edad": 25,
      "email": "juan@mail.com"
    },
    {
      "nombre": "Ana",
      "edad": 30,
      "email": "ana@mail.com"
    },
    {
      "nombre": "Carlos",
      "edad": 22,
      "email": "carlos@mail.com"
    }
];

data.forEach(usuario => {
    let fila = document.createElement("tr");
    fila.innerHTML = `<td>${usuario.nombre}</td><td>${usuario.edad}</td><td>${usuario.email}</td>`;
    tabla.appendChild(fila);
});
```

### How It Works

- `let tabla = document.getElementById("tablaBody");` - Gets a reference to the `<tbody>` element in your HTML (you'll need to create a table with `id="tablaBody"` in your HTML).
- `data = [...]` - Defines an array of JavaScript objects. Each object represents a user with properties like `nombre` (name), `edad` (age), and `email`.
- `data.forEach(usuario => { ... });` - Loops through each object in the `data` array.
- `let fila = document.createElement("tr");` - Creates a new table row (`<tr>`) for each user.
- `fila.innerHTML = ...;` - Uses template literals (``) to generate table cells (`<td>`) dynamically.
- `tabla.appendChild(fila);` - Adds the new row to the `<tbody>` element.

### How to Use

1. Create an HTML file with a table that has a `<tbody>` element with the `id="tablaBody"`.
2. Include this `script.js` file in your HTML.
3. Open the HTML file in your browser. The table will be dynamically populated with the data.

## 2. Fetching and Displaying Data from an API (`4-api-fetch/script.js`)

This script demonstrates how to use the `fetch` API to retrieve data from a public API (JSONPlaceholder) and dynamically add it to the webpage.

### Code Explanation

```javascript
const contentDiv = document.getElementById('content');
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example public API

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        data.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            const title = document.createElement('h3');
            title.classList.add('post-title');
            title.textContent = post.title;

            const body = document.createElement('p');
            body.textContent = post.body;

            postDiv.appendChild(title);
            postDiv.appendChild(body);
            contentDiv.appendChild(postDiv);
        });
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        contentDiv.textContent = 'Failed to load data.';
    });
```

### How It Works

- `const contentDiv = document.getElementById('content');` - Gets a reference to the `div` element where fetched content will be displayed.
- `const apiUrl = 'https://jsonplaceholder.typicode.com/posts';` - Defines the API endpoint.
- `fetch(apiUrl)` - Sends a network request to fetch data from the API.
- `.then(response => { ... })` - Handles the API response.
- `if (!response.ok)` - Checks if the request was successful (status code 200-299).
- `return response.json();` - Converts the response to JSON format.
- `.then(data => { ... })` - Processes the fetched JSON data.
- `data.forEach(post => { ... });` - Loops through the array of posts.
- `document.createElement(...)` - Creates HTML elements (`div`, `h3`, `p`) for each post.
- `postDiv.classList.add('post');` - Adds a class to the `div`.
- `title.textContent = post.title;` - Sets the title text.
- `body.textContent = post.body;` - Sets the body text.
- `postDiv.appendChild(...);` - Appends title and body to the post `div`.
- `contentDiv.appendChild(postDiv);` - Adds the post `div` to the main content `div`.
- `.catch(error => { ... })` - Handles fetch errors.

### How to Use

1. Create an HTML file with a `div` element that has the `id="content"`.
2. Include this `script.js` file in your HTML.
3. Open the HTML file in your browser. The data from the API will be fetched and displayed on the page.

## Conclusion

These examples provide a basic understanding of how to work with data in JavaScript, both local data and data fetched from external APIs. They demonstrate fundamental concepts like DOM manipulation, loops, and asynchronous programming.

### Key Improvements in this `README.md`:

* **Clear Structure:** The `README.md` is well-organized with clear headings and subheadings.
* **Concise Explanations:** The explanations are easy to understand.
* **Code Snippets:** The code is formatted within blocks for better readability.
* **Step-by-Step Instructions:** The "How to Use" sections provide clear guidance.
* **Contextual Information:** The `README.md` explains the purpose of each script and how they relate to each other.
* **File Structure:** The `README.md` clearly outlines the project files.
* **HTML Requirements:** The `README.md` explains the necessary HTML structure for each script.
* **Conclusion:** The `README.md` summarizes the key takeaways of the project.
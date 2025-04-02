// script.js
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
        // Process the data and add it to the DOM
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

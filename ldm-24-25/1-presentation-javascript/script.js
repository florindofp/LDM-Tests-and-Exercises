//SINCRONO VS ASINCRONO
console.log("Uno");
console.log("Dos");
console.log("Tres");
setTimeout(() => console.log("Cuatro"), 1000);
console.log("Cinco");








// Basic Animation
const profileImage = document.getElementById('profileImage');

profileImage.addEventListener('mouseover', () => {
    profileImage.style.boxShadow = '0 0px 1000px rgba(246, 20, 20, 0.5)';
    profileImage.src = "images/profile.webp";
});
profileImage.addEventListener('mouseout', () => {
    profileImage.style.boxShadow = 'none';
    profileImage.src = "images/perfil_cv.jpg";
});



const titleName = document.getElementById('fullName');
const nameColorButton = document.getElementById('changeColorName');
const Name      = titleName.textContent;

nameColorButton.addEventListener('click', () => {
    // CHange the color of the name when the image is clicked
    const colorName = titleName.style.color;
    debugger;
    if(titleName.style.display == ''){
        titleName.style.display = 'none';
        titleName.innerHTML = "</br></br></br>1º DAW";
    }else{
        titleName.style.display = '';
        titleName.innerHTML = "Florindo López";
    }
});


// Show/Hide Form
const showFormButton = document.getElementById('showFormButton');
const contactForm = document.getElementById('contactForm');

showFormButton.addEventListener('click', () => {
    if (contactForm.style.display === 'block') {
        contactForm.style.display = 'none';
        showFormButton.textContent = "Contact Me";
    } else {
        contactForm.style.display = 'block';
        showFormButton.textContent = "Hide Form";
    }
});

// Example of changing content dynamically
//document.getElementById('fullName').textContent = "Florindo López";
//document.getElementById('profession').textContent = "Software Engineer";

const hobbies = ["Reading", "Coding", "Hiking"];
const hobbiesList = document.getElementById('hobbiesList');

hobbies.forEach(hobby => {
    const li = document.createElement('li');
    li.textContent = hobby;
    hobbiesList.appendChild(li);
});

const links = [
    { text: "GitHub", url: "https://github.com/flolopdel" },
    { text: "LinkedIn", url: "https://www.linkedin.com/in/florindo-l%C3%B3pez-delgado-ab81a563/" },
    { text: "Portfolio", url: "https://www.linkedin.com/in/florindo-l%C3%B3pez-delgado-ab81a563/" }
];
const linksList = document.getElementById('linksList');

links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.url;
    a.textContent = link.text;
    a.target = "_blank";
    li.appendChild(a);
    linksList.appendChild(li);
});

// New Functionality: Alert Button
const showAlertButton = document.getElementById('showAlertButton');
showAlertButton.addEventListener('click', () => {
    alert("This is an alert message!");
});

// New Functionality: Change Name Color Button
const changeNameColorButton = document.getElementById('changeNameColorButton');
const fullName = document.getElementById('fullName');
changeNameColorButton.addEventListener('click', () => {
    fullName.style.color = "red"; // Change to your desired color
});




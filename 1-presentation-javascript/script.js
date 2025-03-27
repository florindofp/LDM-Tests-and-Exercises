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


const nameColorButton = document.getElementById('changeColorName');

nameColorButton.addEventListener('click', () => {
    // CHange the color of the name when the image is clicked
    const titleName = document.getElementById('fullName');
    if(titleName.style.color == ''){
        titleName.style.color = 'blue';
    }else{
        titleName.style.color = '';
    }
});











const changeNameColorButtonClass = document.querySelectorAll('.changeNameColorButtonClass');


































// Show/Hide Form
const showFormButton = document.getElementById('showFormButton');
const contactForm = document.getElementById('contactForm');

showFormButton.addEventListener('click', () => {
    if (contactForm.style.display === 'none') {
        contactForm.style.display = 'block';
        showFormButton.textContent = "Hide Form";
    } else {
        contactForm.style.display = 'none';
        showFormButton.textContent = "Contact Me";
    }
});

// Example of changing content dynamically
document.getElementById('fullName').textContent = "Florindo López";
document.getElementById('profession').textContent = "Software Engineer";

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


//const changeNameColorButtonClass = document.querySelectorAll('.changeNameColorButtonClass');
changeNameColorButtonClass.addEventListener('click', () => {
    fullName.style.color = "yellow"; // Change to your desired color
});


document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let error = false;

    // Validación del nombre
    if (nombre.length < 3) {
        document.getElementById("errorNombre").textContent = "Debe tener al menos 3 caracteres.";
        error = true;
    } else {
        document.getElementById("errorNombre").textContent = "";
    }

    // Validación del email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("errorEmail").textContent = "Email inválido.";
        error = true;
    } else {
        document.getElementById("errorEmail").textContent = "";
    }

    // Validación de la contraseña
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById("errorPassword").textContent = "Debe tener al menos 8 caracteres, una mayúscula y un número.";
        error = true;
    } else {
        document.getElementById("errorPassword").textContent = "";
    }

    // Confirmación de contraseña
    if (password !== confirmPassword) {
        document.getElementById("errorConfirmPassword").textContent = "Las contraseñas no coinciden.";
        error = true;
    } else {
        document.getElementById("errorConfirmPassword").textContent = "";
    }

    if (!error) {
        alert("Formulario enviado correctamente.");
    }
});

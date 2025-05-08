document.getElementById("form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre && email && telefono && mensaje) {
    alert("Formulario enviado con éxito");
  } else {
    alert("Por favor, rellena todos los campos");
  }
});
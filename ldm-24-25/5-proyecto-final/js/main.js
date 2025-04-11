document.addEventListener("DOMContentLoaded", () => {
  fetchClima();
  fetchNoticias();
});

function fetchClima() {
  // Aquí va la lógica para obtener clima con WeatherAPI
  // Placeholder
  document.getElementById("clima-hoy").innerHTML = "<p>Clima cargado (simulado)...</p>";
}

function fetchNoticias() {
  // Aquí va la lógica para obtener titulares con GNews
  document.getElementById("noticias").innerHTML = "<p>Noticias cargadas (simulado)...</p>";
}
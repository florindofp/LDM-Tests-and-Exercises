document.addEventListener("DOMContentLoaded", () => {
  const ciudadSelect = document.getElementById("ciudad-select");
  ciudadSelect.addEventListener("change", actualizarClima);
  actualizarClima();
});

function actualizarClima() {
  const ciudad = document.getElementById("ciudad-select").value;
  document.getElementById("clima-horas").innerHTML = `<p>Clima por horas para ${ciudad} (simulado)...</p>`;
  document.getElementById("clima-dias").innerHTML = `<p>Previsión de 5 días para ${ciudad} (simulado)...</p>`;
  document.getElementById("alertas").textContent = "No hay alertas meteorológicas para esta ubicación.";
}
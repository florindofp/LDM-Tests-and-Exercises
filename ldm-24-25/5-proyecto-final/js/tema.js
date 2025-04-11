document.addEventListener("DOMContentLoaded", () => {
  const temaGuardado = localStorage.getItem("tema");
  if (temaGuardado) document.documentElement.setAttribute("data-theme", temaGuardado);

  const boton = document.createElement("button");
  boton.textContent = "Cambiar tema";
  boton.className = "btn btn-secondary position-fixed bottom-0 end-0 m-4";
  boton.onclick = () => {
    const actual = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", actual);
    localStorage.setItem("tema", actual);
  };
  document.body.appendChild(boton);
});

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

const tbody = document.querySelector("tbody");
const template = document.getElementById("row_template");

data.forEach((item, index) => {
    const newRow = template.cloneNode(true);
    newRow.style.display = "";
    newRow.removeAttribute("id");

    newRow.querySelector(".id").textContent = index + 1;
    newRow.querySelector(".name").textContent = item.nombre;
    newRow.querySelector(".age").textContent = item.edad;
    newRow.querySelector(".email").textContent = item.email;

    tbody.appendChild(newRow);
});

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
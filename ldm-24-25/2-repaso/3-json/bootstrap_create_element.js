const data = [
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

const tableBody = document.getElementById('tbody_id');

data.forEach(persona => {
  const row = document.createElement('tr');

  const nombreCell = document.createElement('td');
  nombreCell.textContent = persona.nombre;
  row.appendChild(nombreCell);

  const edadCell = document.createElement('td');
  edadCell.textContent = persona.edad;
  row.appendChild(edadCell);

  const emailCell = document.createElement('td');
  emailCell.textContent = persona.email;
  row.appendChild(emailCell);

  tableBody.appendChild(row);
});
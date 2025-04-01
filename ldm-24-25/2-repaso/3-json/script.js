fetch("datos.json")
    .then(response => response.json())
    .then(data => {
        let tabla = document.getElementById("tablaBody");
        data.forEach(usuario => {
            let fila = document.createElement("tr");
            fila.innerHTML = `<td>${usuario.nombre}</td><td>${usuario.edad}</td><td>${usuario.email}</td>`;
            tabla.appendChild(fila);
        });
    })
    .catch(error => console.error("Error cargando JSON:", error));

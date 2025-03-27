document.getElementById("cargarUsuarios").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            let lista = document.getElementById("listaUsuarios");
            lista.innerHTML = "";
            data.forEach(usuario => {
                let item = document.createElement("li");
                item.textContent = `${usuario.name} - ${usuario.email}`;
                lista.appendChild(item);
            });
        })
        .catch(error => console.error("Error al cargar usuarios:", error));
});

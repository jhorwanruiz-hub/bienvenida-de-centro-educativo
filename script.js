function mostrarMensaje() {
    const nombre = document.getElementById("nombre").value;
    const resultado = document.getElementById("resultado");

    if (nombre.trim() === "") {
        alert("Por favor, ingresa tu nombre");
    } else {
        resultado.textContent = `¡Bienvenido/a ${nombre}! Nos alegra que formes parte del politecnico: IPPFM.`;
    }
}

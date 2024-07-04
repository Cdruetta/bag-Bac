function toggleInfo(button) {
    var content = button.previousElementSibling; // Obtener el contenido adicional
    if (content.style.display === 'none') {
        // Mostrar el contenido si está oculto
        content.style.display = 'block';
        button.textContent = 'Ver Menos';
    } else {
        // Ocultar el contenido si está visible
        content.style.display = 'none';
        button.textContent = 'Ver Más';
    }
}

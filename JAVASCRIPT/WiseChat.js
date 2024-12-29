document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('miBoton').addEventListener('click', function() {
        document.getElementById('mensaje').textContent = '¡Has hecho clic en el botón!';
    });
});

// Muestra el formulario de inicio de sesión y oculta el de registro
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

// Muestra el formulario de registro y oculta el de inicio de sesión
function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

// Evento que se ejecuta cuando el contenido del DOM ha sido cargado
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar formulario de inicio de sesión por defecto
    showLogin();

    // Manejo del evento de envío del formulario de inicio de sesión
    document.getElementById('loginFormElement').addEventListener('submit', async function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            alert('Inicio de sesión exitoso');
            window.location.href = 'COMINGSOON.html'; // Redirige a la página de "Próximamente"
        } else {
            alert('Correo o contraseña incorrectos');
        }
    });

    // Manejo del evento de envío del formulario de registro
    document.getElementById('registerFormElement').addEventListener('submit', async function(event) {
        event.preventDefault();
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password === confirmPassword) {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                alert('Registro exitoso');
                showLogin();
            } else {
                alert('Error en el registro');
            }
        } else {
            alert('Las contraseñas no coinciden');
        }
    });
});
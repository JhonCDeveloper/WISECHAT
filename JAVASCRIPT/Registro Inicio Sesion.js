function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    showLogin();

    document.getElementById('loginForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();
        if (response.ok) {
            alert('Inicio de sesión exitoso');
            localStorage.setItem('token', result.token);
            window.location.href = 'COMINGSOON.html';
        } else {
            alert(result.message || 'Error al iniciar sesión');
        }
    });

    document.getElementById('registerForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            return alert('Las contraseñas no coinciden');
        }

        const response = await fetch('http://localhost:5000/register', {
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
            alert('Error al registrar usuario');
        }
    });
});

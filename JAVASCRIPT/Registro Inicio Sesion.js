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

// Lista de usuarios registrados
let users = [
    { email: "sergiioriivera7@gmail.com", password: "Sergio123" },
    { email: "Yuranytamara@gmail.com", password: "Tamara123" },
    { email: "jairovalencia100K19@gmail.com", password: "100K1718" },
    { email: "isagoz1708@gmail.com", password: "Isa123" },
    // Añade más usuarios según sea necesario
];

// Función para autenticar a un usuario
function authenticate(email, password) {
    return users.some(user => user.email === email && user.password === password);
}

// Evento que se ejecuta cuando el contenido del DOM ha sido cargado
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar formulario de inicio de sesión por defecto
    showLogin();

    // Manejo del evento de envío del formulario de inicio de sesión
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (authenticate(email, password)) {
            alert('Inicio de sesión exitoso');
            window.location.href = 'COMINGSOON.html'; // Redirige a la última página
        } else {
            alert('Correo o contraseña incorrectos');
        }
    });

    // Manejo del evento de envío del formulario de registro
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password === confirmPassword) {
            users.push({ email: email, password: password });
            alert('Registro exitoso');
            showLogin();
        } else {
            alert('Las contraseñas no coinciden');
        }
    });
});

// Obtén los elementos del formulario y el mensaje de error por su ID
var btnLogin = document.getElementById('btnLogin');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var errorMessage = document.getElementById('error-message');

// Agrega un evento de clic al botón
btnLogin.addEventListener('click', function() {
    // Obtiene los valores del correo y la contraseña
    var enteredEmail = emailInput.value;
    var enteredPassword = passwordInput.value;

    // Verifica si el correo y la contraseña son los predefinidos
    if (enteredEmail === 'admin@gmail.com' && enteredPassword === 'admin') {
        // Redirige al usuario a la siguiente página
        window.location.href = '../pages/catalogo.html';
    } else {
        // Muestra un mensaje de error si el correo o la contraseña son incorrectos
        errorMessage.textContent = 'Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.';
    }
});
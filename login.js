// Función para alternar la visibilidad de la contraseña
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = document.getElementById(inputId + '-eye');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.textContent = "👁️"; 
    } else {
        passwordInput.type = "password";
        eyeIcon.textContent = "👁️"; 
    }
}

// Función para guardar la contraseña en localStorage
function savePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    localStorage.setItem('savedPassword', passwordInput.value);
}

// Función para cargar la contraseña desde localStorage
function loadPassword(inputId) {
    const savedPassword = localStorage.getItem('savedPassword');
    if (savedPassword) {
        document.getElementById(inputId).value = savedPassword;
    }
}

// Llama a loadPassword al cargar la página para prellenar el campo
window.onload = function() {
    loadPassword('password-input'); // Reemplaza 'password-input' por el ID real de tu campo de contraseña
}

// Función para mostrar mensajes de alerta
function showAlert(message) {
    const alertBox = document.getElementById('alert-box');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.textContent = message;
    alertBox.style.display = 'block';
}

// Función para cerrar el mensaje de alerta
function closeAlert() {
    const alertBox = document.getElementById('alert-box');
    alertBox.style.display = 'none';
}

// Función para abrir el modal de registro
function openModal() {
    document.getElementById('register-modal').style.display = 'flex'; 
}

// Función para cerrar el modal de registro
function closeModal() {
    document.getElementById('register-modal').style.display = 'none';
    document.getElementById('register-form').reset(); 
}

// Función para abrir el modal de recuperación de contraseña
function openRecoverModal() {
    document.getElementById('recover-modal').style.display = 'flex'; 
}

// Función para cerrar el modal de recuperación de contraseña
function closeRecoverModal() {
    document.getElementById('recover-modal').style.display = 'none';
    document.getElementById('recuperar-form').reset(); 
}

// Función para abrir el modal de recuperación de nombre de usuario
function openRecoverUsernameModal() {
    document.getElementById('recover-username-modal').style.display = 'flex'; 
}

// Función para cerrar el modal de recuperación de nombre de usuario
function closeRecoverUsernameModal() {
    document.getElementById('recover-username-modal').style.display = 'none';
    document.getElementById('recover-username-form').reset(); 
}

// Unificar el evento de clic fuera de los modales
window.onclick = function(event) {
    const registerModal = document.getElementById('register-modal');
    const recoverModal = document.getElementById('recover-modal');
    const recoverUsernameModal = document.getElementById('recover-username-modal');

    if (event.target == registerModal) {
        closeModal();
    }

    if (event.target == recoverModal) {
        closeRecoverModal();
    }

    if (event.target == recoverUsernameModal) {
        closeRecoverUsernameModal();
    }
}

// Manejar el formulario de registro
document.getElementById('register-form').onsubmit = function(e) {
    e.preventDefault(); // Evitar el envío estándar
    const formData = new FormData(this);
    fetch('register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(response => {
        showAlert(response);
        if (response.trim() === "Registro exitoso") {
            setTimeout(() => {
                closeModal(); 
                closeAlert(); 
            }, 1000);
        }
    });
};

// Manejar el formulario de restablecimiento de contraseña
document.getElementById('recuperar-form').onsubmit = function(e) {
    e.preventDefault(); // Evitar el envío estándar
    const formData = new FormData(this);
    fetch('recuperar.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(response => {
        showAlert(response);
        if (response.trim() === "Contraseña restablecida exitosamente") {
            setTimeout(() => {
                closeRecoverModal(); 
                closeAlert(); 
            }, 1000); 
        }
    });
};

// Manejar el formulario de recuperación de nombre de usuario
document.getElementById('recover-username-form').onsubmit = function(e) {
    e.preventDefault(); // Evitar el envío estándar
    const formData = new FormData(this);
    fetch('recuperar_usuario.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(response => {
        showAlert(response); // Mostrar el mensaje de alerta con la respuesta
    });
};

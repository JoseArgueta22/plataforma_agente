<?php
session_start();
session_destroy(); // cerrar la sesión actual
header("Location: login_register.html"); // Redirigir al inicio de sesión
exit();
?>

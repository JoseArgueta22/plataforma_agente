<?php
require 'db_connection.php'; // Conexión a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $respuesta_seguridad = mysqli_real_escape_string($conn, $_POST['respuesta_seguridad']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Consultar si existe un usuario con la respuesta de seguridad proporcionada
    $query = "SELECT * FROM usuarios WHERE respuesta_seguridad = '$respuesta_seguridad'";
    $result = mysqli_query($conn, $query);

    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        // Verificar la contraseña (usando la función password_verify)
        if (password_verify($password, $row['contrasena'])) {
            // Si la contraseña es correcta, mostrar el nombre de usuario
            echo "Tu nombre de usuario es: " . htmlspecialchars($row['nombre_usuario']);
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "No se encontró un usuario con esa respuesta de seguridad.";
    }
}
?>

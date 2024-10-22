<?php
require 'db_connection.php'; // Conexión a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $respuesta_seguridad = mysqli_real_escape_string($conn, $_POST['respuesta_seguridad']);
    $nueva_contrasena = password_hash($_POST['nueva_contrasena'], PASSWORD_DEFAULT); // Hashear la contraseña

    // Consultar si el nombre de usuario existe
    $query = "SELECT * FROM usuarios WHERE nombre_usuario = '$username'";
    $result = mysqli_query($conn, $query);

    if ($result && mysqli_num_rows($result) == 1) {
        $row = mysqli_fetch_assoc($result);

        // Verificar la respuesta de seguridad 
        if (strcasecmp(trim($respuesta_seguridad), trim($row['respuesta_seguridad'])) === 0) {
            // Actualizar la contraseña
            $update_query = "UPDATE usuarios SET contrasena = '$nueva_contrasena' WHERE nombre_usuario = '$username'";
            if (mysqli_query($conn, $update_query)) {
                echo "Contraseña restablecida con éxito.";
            } else {
                echo "Error al restablecer la contraseña.";
            }
        } else {
            echo "Respuesta de seguridad incorrecta.";
        }
    } else {
        echo "El nombre de usuario no existe.";
    }
}
?>
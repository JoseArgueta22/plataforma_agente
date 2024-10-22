<?php
require 'db_connection.php'; // Conexión a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = mysqli_real_escape_string($conn, $_POST['nombre']);
    $apellido = mysqli_real_escape_string($conn, $_POST['apellido']);
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']); // Sin encriptar
    $edad = mysqli_real_escape_string($conn, $_POST['edad']);
    $pregunta_seguridad = mysqli_real_escape_string($conn, $_POST['pregunta_seguridad']);
    $respuesta_seguridad = mysqli_real_escape_string($conn, $_POST['respuesta_seguridad']);

    // Verificar si el nombre de usuario ya existe
    $check_query = "SELECT * FROM usuarios WHERE nombre_usuario = '$username'";
    $result = mysqli_query($conn, $check_query);

    if (mysqli_num_rows($result) > 0) {
        echo "El nombre de usuario ya está en uso.";
    } else {
        // Insertar el nuevo usuario en la base de datos
        $query = "INSERT INTO usuarios (nombre, apellido, nombre_usuario, contrasena, edad, pregunta_seguridad, respuesta_seguridad) 
                  VALUES ('$nombre', '$apellido', '$username', '$password', '$edad', '$pregunta_seguridad', '$respuesta_seguridad')";
        if (mysqli_query($conn, $query)) {
            echo "Registro exitoso. Ahora puedes iniciar sesión.";
        } else {
            echo "Error en el registro. Inténtalo nuevamente.";
        }
    }
}
?>

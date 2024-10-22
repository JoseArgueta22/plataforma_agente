<?php
session_start();
require 'db_connection.php'; // Conexión a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitización de los datos ingresados por el usuario
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = $_POST['password']; // Sin encriptación

    // Consultar el usuario en la base de datos
    $query = "SELECT * FROM usuarios WHERE nombre_usuario = '$username'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) == 1) {
        $row = mysqli_fetch_assoc($result);
        
        // Verificar la contraseña sin encriptación
        if ($password === $row['contrasena']) {
            // Guardar datos de usuario en la sesión
            $_SESSION['nombre_usuario'] = $row['nombre_usuario'];
            $_SESSION['nombre'] = $row['nombre'];

            // Redirigir a prueba.html después del éxito en el inicio de sesión
            header("Location: index.php");
            exit(); // Asegurarse de que no se ejecute más código después de la redirección
        } else {
            // Mostrar alerta en caso de contraseña incorrecta
            echo "
            <html>
            <head>
                <script>
                    alert('Contraseña incorrecta.');
                    window.location.href = 'login_register.html'; // Redirige de vuelta a la página de login
                </script>
            </head>
            <body></body>
            </html>
            ";
        }
    } else {
        // Mostrar alerta en caso de que el nombre de usuario no exista
        echo "
        <html>
        <head>
            <script>
                alert('El nombre de usuario no existe.');
                window.location.href = 'login_register.html'; // Redirige de vuelta a la página de login
            </script>
        </head>
        <body></body>
        </html>
        ";
    }
}
?>


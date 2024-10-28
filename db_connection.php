<?php
$servername = "localhost"; // Hostname
$username = "root";              // MySQL Username
$password = "";            // MySQL Password
$dbname = "plataforma_agente"; // MySQL Database Name

// Crear la conexión
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verificar la conexión
if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

echo ""; // Mensaje de éxito
?>

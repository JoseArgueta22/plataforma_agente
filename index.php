<?php
session_start();
if (!isset($_SESSION['nombre_usuario'])) {
    header("Location: login_register.html");
    exit();
}
// Conexión a la base de datos
include 'db_connection.php'; 

// Obtener la puntuación acumulada del usuario
$nombre_usuario = $_SESSION['nombre_usuario'];
$puntuacion_total = 0;

$sql = "SELECT puntuacion_total FROM puntuaciones_totales WHERE nombre_usuario = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $nombre_usuario);
$stmt->execute();
$result = $stmt->get_result();
if ($row = $result->fetch_assoc()) {
    $puntuacion_total = $row['puntuacion_total'];
}
$stmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plataforma de Aprendizaje</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>¡Bienvenido a Tu Aventura de Aprendizaje!</h1>
            <h2>Plataforma Web para la estimulación y aprendizaje de palabras</h2>
            <p id="usuario">Hola, <?php echo htmlspecialchars($_SESSION['nombre']); ?></p>
            <p id="puntos">Puntuación acumulada: <?php echo $puntuacion_total; ?> puntos</p>
        </header>
        <main>
            <section class="modules">
                <div class="module">
                    <img src="images/lapiz_me.png" alt="Módulo 1">
                    <button onclick="irAlModulo(1)">Módulo 1 Asociar palabras con imágenes</button>
                </div>
                <div class="module">
                    <img src="images/oracion.png" alt="Módulo 2">
                    <button onclick="irAlModulo(2)">Módulo 2 Completar oraciones</button>
                </div>
                <div class="module">
                <img src="images/repetir.png" alt="Módulo 3">
                <button onclick="mostrarSubmodulos()">Módulo 3 Repetir palabras</button>
                </div>

            </section>
            <section class="instructions">
                <button onclick="mostrarInstrucciones('instrucciones1')">Instrucciones Módulo 1</button>
                <button onclick="mostrarInstrucciones('instrucciones2')">Instrucciones Módulo 2</button>
                <button onclick="mostrarInstrucciones('instrucciones3')">Instrucciones Módulo 3</button>
            </section>
        </main>
        <button class="exit-button" onclick="salir()">Salir</button>
    </div>

    <!-- Contenedor para el mensaje emergente -->
    <div id="popup" class="popup">
        <div class="popup-content">
            <span class="close" onclick="cerrarPopup()">&times;</span>
            <p id="popup-text"></p>
            <button onclick="cerrarPopup()">Aceptar</button>
        </div>
    </div>

    <div id="submodule-popup" class="popup" style="display: none;">
    <div class="popup-content">
        <span class="close" onclick="cerrarSubmodulePopup()">&times;</span>
        <p>Selecciona un Módulo:</p>
        <button onclick="seleccionarSubmodulo(3)">Repetir palabras</button>
        <button onclick="seleccionarSubmodulo(4)">Repetir palabras por letra</button>
    </div>
</div>
    <!-- Barra de carga -->
    <div id="loading-bar" class="loading-bar" style="display: none;">
        <div class="loading-spinner"></div>
    </div>

    <script src="script.js"></script>

    <script>
        // Redirige al módulo seleccionado
        function irAlModulo(modulo) {
            document.getElementById("loading-bar").style.display = "flex"; // Mostrar barra de carga
            setTimeout(() => {
                // Redirigir a la página de bienvenida con el parámetro del módulo
                window.location.href = `bienvenida.html?modulo=${modulo}`;
            }, 1000); 
        }

        function salir() {
            window.location.href = "logout.php";
        }
    </script>
</body>
</html>

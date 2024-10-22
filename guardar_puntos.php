<?php
session_start(); 

include 'db_connection.php';

// Obtener datos JSON enviados por POST
$data = json_decode(file_get_contents('php://input'), true);

// Validar que los campos están presentes
if (!isset($_SESSION['nombre_usuario']) || !isset($data['puntos']) || !isset($data['modulo'])) {
    echo json_encode(['error' => 'Faltan datos']);
    exit();
}

$nombre_usuario = $_SESSION['nombre_usuario']; // Asignar la variable de sesión
$puntos = (int)$data['puntos']; 
$modulo = (int)$data['modulo'];

// Verificar si ya existe una puntuación para este usuario y módulo
$sql = "SELECT puntuacion_total FROM puntuaciones_totales WHERE nombre_usuario = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('s', $nombre_usuario);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Si existe, actualizar la puntuación acumulada
    $row = $result->fetch_assoc();
    $puntuacion_total = $row['puntuacion_total'] + $puntos;

    $sql = "UPDATE puntuaciones_totales SET puntuacion_total = ?, fecha = NOW() WHERE nombre_usuario = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('is', $puntuacion_total, $nombre_usuario);
} else {
    // Si no existe, insertar una nueva fila
    $sql = "INSERT INTO puntuaciones_totales (nombre_usuario, puntuacion_total, fecha) VALUES (?, ?, NOW())";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('si', $nombre_usuario, $puntos);
}

// Ejecutar la consulta y manejar errores
if ($stmt->execute()) {
    echo json_encode(['message' => 'Puntos guardados con éxito']);
} else {
    echo json_encode(['error' => 'Error al guardar los puntos: ' . $stmt->error]);
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>


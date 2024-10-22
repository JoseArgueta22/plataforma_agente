// Variables globales
let imagenesYRespuestas = [
    { src: "images/manzana.png", respuesta: "manzana" },
    { src: "images/banana.png", respuesta: "banano" },
    { src: "images/carro.png", respuesta: "carro" },
    { src: "images/sol.png", respuesta: "sol" },
    { src: "images/luna.png", respuesta: "luna" },
    { src: "images/flor.png", respuesta: "flor" },
    { src: "images/gato.jpg", respuesta: "gato" },
    { src: "images/perro.png", respuesta: "perro" },
    { src: "images/casa.png", respuesta: "casa" },
    { src: "images/gota.png", respuesta: "gota" },//10
    { src: "images/pan.png", respuesta: "pan" },
    { src: "images/cohete.png", respuesta: "cohete" },
    { src: "images/trebol.png", respuesta: "trébol" },
    { src: "images/elefante.png", respuesta: "elefante" },
    { src: "images/caballo.png", respuesta: "caballo" },
    { src: "images/naranja.png", respuesta: "naranja" },
    { src: "images/sandia.png", respuesta: "sandía" },
    { src: "images/mango.png", respuesta: "mango" },
    { src: "images/fresa.png", respuesta: "fresa" },
    { src: "images/cama.png", respuesta: "cama" },//aqui 20
    { src: "images/lampara.png", respuesta: "lámpara" },
    { src: "images/cuchara.png", respuesta: "cuchara" },
    { src: "images/taza.png", respuesta: "taza" },
    { src: "images/silla.png", respuesta: "silla" },
    { src: "images/libros.png", respuesta: "libros" },
    { src: "images/tren.png", respuesta: "tren" },
    { src: "images/camioneta.png", respuesta: "camioneta" },
    { src: "images/motocicleta.png", respuesta: "motocicleta" },
    { src: "images/barco.png", respuesta: "barco" },
    { src: "images/avion.png", respuesta: "avión" },//aqui 30
    { src: "images/bicicleta.png", respuesta: "bicicleta" },
    { src: "images/pie.png", respuesta: "pie" },
    { src: "images/mano.png", respuesta: "mano" },
    { src: "images/ojo.png", respuesta: "ojo" },
    { src: "images/oreja.png", respuesta: "oreja" },
    { src: "images/estrella.png", respuesta: "estrella" },
    { src: "images/arbol.png", respuesta: "árbol" },
    { src: "images/nube.png", respuesta: "nube" },
    { src: "images/camisa.png", respuesta: "camisa" },
    { src: "images/vestido.png", respuesta: "vestido" },//40
    { src: "images/sombrero.png", respuesta: "sombrero" },
    { src: "images/vaca.png", respuesta: "vaca" },
    { src: "images/tortuga.png", respuesta: "tortuga" },
    { src: "images/gallo.png", respuesta: "gallo" },
    { src: "images/pollo.png", respuesta: "pollo" },
    { src: "images/oveja.png", respuesta: "oveja" },
    { src: "images/leon.png", respuesta: "león" },
    { src: "images/tiburon.png", respuesta: "tiburón" },
    { src: "images/uva.png", respuesta: "uvas" },
    { src: "images/piña.png", respuesta: "piña" },//50
    { src: "images/melon.png", respuesta: "melón" },
    { src: "images/tele.png", respuesta: "televisión" },
    { src: "images/compu.png", respuesta: "computadora" },
    { src: "images/hipopotamo.png", respuesta: "hipopotamo" },
    { src: "images/pato.png", respuesta: "pato" },
    { src: "images/rana.png", respuesta: "rana" },
    { src: "images/zorro.png", respuesta: "zorro" },
    { src: "images/hormiga.png", respuesta: "hormiga" },
    { src: "images/grillo.png", respuesta: "grillo" },
    { src: "images/tigre.png", respuesta: "tigre" },//60

    //cualquier cosa movi la pregunta del login
];

let estado = {
    respuestasCorrectas: 0,
    respuestasIncorrectas: 0, // contador de respuestas incorrectas
    indiceImagenActual: 0,
    respuestasUsuario: [],
    totalImagenes: 7,
    imagenesSeleccionadas: [],
    imagenesRespondidas: [],
    puntos: 0, // acumulador de puntos
    palabrasIncorrectas: [] // almacenar palabras incorrectas
};

// Función para inicializar el módulo
function iniciarModulo() {
    estado.imagenesSeleccionadas = imagenesYRespuestas.sort(() => 0.5 - Math.random()).slice(0, estado.totalImagenes);
    estado.imagenesRespondidas = [];
    estado.indiceImagenActual = 0;
    estado.respuestasUsuario = [];  // Reiniciar las respuestas del usuario
    estado.respuestasCorrectas = 0; // Reiniciar el contador de respuestas correctas
    estado.puntos = 0; // Reiniciar los puntos

    document.getElementById("barra-progreso-container").style.display = "block";
    document.getElementById("barra-progreso").value = 0;
    document.getElementById("barra-progreso").max = estado.totalImagenes;

    cargarImagen();
}

// Función para cargar la imagen actual
function cargarImagen() {
    if (estado.indiceImagenActual < estado.imagenesSeleccionadas.length) {
        const imagen = document.getElementById("imagen");
        const imagenSeleccionada = estado.imagenesSeleccionadas[estado.indiceImagenActual];

        if (imagenSeleccionada) {
            imagen.src = imagenSeleccionada.src;
            document.getElementById("respuesta").value = "";
            mostrarMensaje("", "");
        }
    } else {
        finalizarModulo();
    }
}

// Función para normalizar texto eliminando tildes
function eliminarTildes(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Función para verificar la respuesta
function verificarRespuesta() {
    const respuestaUsuario = eliminarTildes(document.getElementById("respuesta").value.trim().toLowerCase());

    if (respuestaUsuario === "") {
        alert("Ingresa una respuesta para poder continuar :D.");
        return;
    }

    const imagenSeleccionada = estado.imagenesSeleccionadas[estado.indiceImagenActual];
    if (!imagenSeleccionada) {
        return;
    }

    const respuestasCorrectas = eliminarTildes(imagenSeleccionada.respuesta.toLowerCase()).split("||");
    const esRespuestaCorrecta = respuestasCorrectas.some(respuestaCorrecta => respuestaUsuario === eliminarTildes(respuestaCorrecta));

    estado.respuestasUsuario.push({ correcta: respuestasCorrectas.join("||"), usuario: respuestaUsuario });

    if (esRespuestaCorrecta) {
        estado.respuestasCorrectas++;
        estado.puntos += 5; // sumar puntos
        mostrarMensaje("Correcto +5", "green");
        reproducirSonido('sonido-correcto');
    } else {
        estado.respuestasIncorrectas++; // contar respuesta incorrecta
        estado.puntos -= 3; // restar puntos
        mostrarMensaje("Incorrecto -3", "red");
        // Almacenar la palabra incorrecta
        estado.palabrasIncorrectas.push({ imagen: imagenSeleccionada.src, respuestaCorrecta: respuestasCorrectas.join("||"), respuestaUsuario });
    }

    document.getElementById("barra-progreso").value = estado.respuestasUsuario.length;

    estado.imagenesSeleccionadas.splice(estado.indiceImagenActual, 1);

    if (estado.imagenesSeleccionadas.length === 0) {
        finalizarModulo();
    } else {
        estado.indiceImagenActual = Math.min(estado.indiceImagenActual, estado.imagenesSeleccionadas.length - 1);
        setTimeout(() => {
            cargarImagen();
        }, 1000);
    }
}

// Función para cambiar la imagen a otra al azar
function cambiarImagen() {
    if (estado.imagenesSeleccionadas.length > 1) {
        let nuevoIndice = Math.floor(Math.random() * estado.imagenesSeleccionadas.length);
        
        while (nuevoIndice === estado.indiceImagenActual) {
            nuevoIndice = Math.floor(Math.random() * estado.imagenesSeleccionadas.length);
        }

        estado.indiceImagenActual = nuevoIndice;
        cargarImagen(); 
    }
}

// Función para mostrar el mensaje de correcto o incorrecto
function mostrarMensaje(texto, color) {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = texto;
    mensaje.style.color = color;
}

// Función para mostrar los resultados al final del módulo
function mostrarResultados() {
    document.getElementById("imagen-container").style.display = "none";
    document.getElementById("respuesta-container").style.display = "none";
    document.getElementById("mensaje-container").style.display = "none";
    document.getElementById("titulo-cambiar-imagen").style.display = "none"; 
    document.getElementById("cambiar-imagen-btn").style.display = "none"; 
    
    const resultadosContainer = document.getElementById("resultados-container");
    resultadosContainer.style.display = "block";
    
    let resultadosTexto = `Respuestas correctas: ${estado.respuestasCorrectas} de ${estado.totalImagenes}.<br>Puntos Totales: ${estado.puntos}<br><br>`;
    estado.respuestasUsuario.forEach((respuesta, index) => {
        resultadosTexto += `<div class="respuesta">Imagen ${index + 1}: Correcta: ${respuesta.correcta}, Tu respuesta: ${respuesta.usuario}</div>`;
    });
    
    document.getElementById("resultados-texto").innerHTML = resultadosTexto;

    // Mostrar palabras incorrectas y sugerencias
    mostrarPalabrasIncorrectas();

    marcarModuloCompleto(1);
}

// Función para mostrar las palabras incorrectas en un modal
function mostrarPalabrasIncorrectas() {
    const modalSugerencias = document.getElementById("modal-sugerencias");
    const sugerenciasTexto = estado.palabrasIncorrectas.map(({ imagen, respuestaCorrecta, respuestaUsuario }) => {
        const sugerencia = generarSugerencia(respuestaCorrecta, respuestaUsuario);
        return `<div class="sugerencia">Imagen: ${imagen.split('/').pop()}<br>Respuesta correcta: ${respuestaCorrecta}<br>Tu respuesta: ${respuestaUsuario}<br>Sugerencia: ${sugerencia}</div>`; // Mostrar solo el nombre de la imagen
    }).join("");
    
    modalSugerencias.querySelector("#sugerencias-texto").innerHTML = sugerenciasTexto;
    modalSugerencias.style.display = "block"; // Mostrar el modal

    // Cerrar el modal si se hace clic fuera del contenido
window.onclick = function(event) {
    const modalSugerencias = document.getElementById("modal-sugerencias");
    if (event.target === modalSugerencias) {
        cerrarModal('modal-sugerencias');
    }
}

// Cerrar modal de sugerencias
function cerrarModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
}


// Generar sugerencias basadas en la respuesta incorrecta
function generarSugerencia(respuestaCorrecta, respuestaUsuario) {
    const variacionesSugerencias = [
        "Parece que faltó alguna letra. Revisa tu respuesta.",
        "Revisa la ortografía de tu respuesta.",
        "Intenta revisar si hay errores en la palabra.",
        "Quizás te falta un acento o una letra.",
        "Recuerda que las palabras pueden tener sinónimos o formas diferentes."
    ];

    const respuestaCorrectaNormalizada = eliminarTildes(respuestaCorrecta).toLowerCase();
    const respuestaUsuarioNormalizada = eliminarTildes(respuestaUsuario).toLowerCase();

    if (respuestaUsuarioNormalizada.length < respuestaCorrectaNormalizada.length) {
        return variacionesSugerencias[0]; // Variación 1
    } else if (respuestaUsuarioNormalizada.length > respuestaCorrectaNormalizada.length) {
        return variacionesSugerencias[1]; // Variación 2
    } else {
        return variacionesSugerencias[Math.floor(Math.random() * variacionesSugerencias.length)]; // Seleccionar aleatoriamente
    }
}

// Función para reproducir sonido
function reproducirSonido(id) {
    const sonido = document.getElementById(id);
    if (sonido) {
        sonido.play();
    }
}

// Función para reiniciar el módulo
function reiniciarModulo() {
    document.getElementById("resultados-container").style.display = "none";
    document.getElementById("imagen-container").style.display = "block";
    document.getElementById("respuesta-container").style.display = "block";
    document.getElementById("mensaje-container").style.display = "block";
    document.getElementById("titulo-cambiar-imagen").style.display = "block"; 
    document.getElementById("cambiar-imagen-btn").style.display = "block"; 

    // Reiniciar palabras incorrectas
    estado.palabrasIncorrectas = []; // Reiniciar palabras incorrectas
    
    iniciarModulo();
}

// Función para mostrar el mensaje final en el modal
function mostrarMensajeFinal() {
    const modal = document.getElementById("modal-final");

    // Mostrar el modal
    modal.style.display = "block";

    // Obtener el elemento del botón de continuar aprendiendo
    const continuarBtn = document.getElementById("listo-btn");
    continuarBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Obtener el elemento del botón de cerrar
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cerrar el modal si se hace clic fuera del contenido
 // Cerrar el modal si se hace clic fuera del contenido
 window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        }
    }
}

// Función para finalizar el módulo y ocultar la barra de progreso
function finalizarModulo() {
    document.getElementById("barra-progreso-container").style.display = 'none';
    mostrarResultados();
    reproducirSonido('sonido-fin-modulo');
    mostrarMensajeFinal(); 
    enviarPuntosAlServidor(); 
}

// Modal de Sugerencias
const modalSugerencias = `
<div id="modal-sugerencias" class="modal">
    <div class="modal-content">
        <span class="close" onclick="cerrarModal('modal-sugerencias')">&times;</span>
        <h2>Palabras Incorrectas y Sugerencias</h2>
        <div id="sugerencias-texto"></div>
        <button id="continuar-btn" onclick="cerrarModal('modal-sugerencias')">Continuar</button>
    </div>
</div>
`;

document.body.insertAdjacentHTML('beforeend', modalSugerencias);

function cerrarModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Función para enviar los puntos al servidor
function enviarPuntosAlServidor() {
    const puntos = estado.puntos;
    const modulo = 1; // numero de modulos 

    fetch('guardar_puntos.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            puntos: puntos,
            modulo: modulo
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Error al guardar los puntos:', data.error);
        } else {
            console.log('Puntos guardados con éxito:', data.message);
        }
    })
    .catch(error => console.error('Error al enviar los puntos:', error));
}

function marcarModuloCompleto(modulo) {
    localStorage.setItem(`modulo${modulo}Completo`, true);
    console.log(`Modulo ${modulo} completado y guardado en localStorage.`);
}

// Función para regresar a la página principal
function regresar() {
    window.location.href = 'index.php';
}

// Iniciar el módulo cuando la página se carga
window.onload = iniciarModulo;
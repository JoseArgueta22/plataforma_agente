// Variables globales
let palabras = [
    "araña", "avión", "árbol", "auto", "amigo",
    "banana", "burro", "bola", "bebé", "barco",
    "carro", "casa", "conejo", "cielo", "caballo",
    "dado", "delfín", "día", "dinero", "dragón",
    "elefante", "espejo", "estrella", "escalera", "espada",
    "flor", "fuego", "fresa", "foca", "farol",
    "gato", "gota", "gorila", "globo", "gallina",
    "hoja", "huevo", "helado", "hombre", "hermano",
    "isla", "iglesia", "iglú", "iguanita", "imán",
    "juguete", "jirafa", "jabón", "jugo", "jardín",
    "luna", "lobo", "lápiz", "lago", "libro",
    "manzana", "mesa", "mar", "mango", "mono",
    "nube", "nido", "naranja", "niño", "nuez",
    "perro", "pato", "pelota", "pez", "piedra",
    "rana", "rosa", "ratón", "reloj", "río",
    "sol", "silla", "serpiente", "sombrero", "sopa",
    "tren", "tigre", "taza", "tomate", "tortuga",
    "vaca", "ventana", "viento", "vela", "vampiro",
    "zapato", "zorro", "zanahoria", "zebra", "zumo",
    "abuelita", "barba", "bote", "cabina", "calle",
    "caramelo", "cerca", "cereza", "cocina", "cuadro",
    "dedo", "dinosaurio", "doble", "fábrica", "galleta",
    "gato", "globo", "jugo", "kilo",
    "lapiz", "mapa", "mariposa", "mesa", "moño",
    "nieve", "ojo", "oso", "pájaro", "papá",
    "pescado", "piedra", "pueblo", "química", "ratón",
    "reina", "sapo", "silla", "sombra", "taza",
    "tigre", "tornado", "vacaciones", "viento", "yate"
];

let cantidadPalabras =7; // palabras para mostrar por sesion 
let palabrasSeleccionadas = [];
let indiceActual = 0;
let moduloFinalizado = false;

// Función para seleccionar palabras al azar
function seleccionarPalabrasAlAzar() {
    let palabrasAleatorias = [...palabras]; // Copia el array original para no modificarlo
    palabrasSeleccionadas = [];

    for (let i = 0; i < cantidadPalabras; i++) {
        // Elige un índice al azar dentro del array de palabras restantes
        let indiceAleatorio = Math.floor(Math.random() * palabrasAleatorias.length);
        // Añade la palabra seleccionada al array de palabras seleccionadas
        palabrasSeleccionadas.push(palabrasAleatorias[indiceAleatorio]);
        // Elimina la palabra seleccionada del array temporal para evitar duplicados
        palabrasAleatorias.splice(indiceAleatorio, 1);
    }
}

// Función para mostrar la siguiente palabra
function mostrarSiguientePalabra() {
    if (indiceActual < cantidadPalabras) {
        document.getElementById("palabra").textContent = palabrasSeleccionadas[indiceActual];
        indiceActual++;
        actualizarProgreso();
        
        // Cambiar el texto del botón a "Finalizar" si es la última palabra
        if (indiceActual === cantidadPalabras) {
            document.getElementById("seguir-button").textContent = "Finalizar";
        }
    } else {
        moduloFinalizado = true; // Marcar el módulo como finalizado
        mostrarModalFinal(); // Llamar a la función para mostrar el modal final
    }
}

let palabrasRepetidas = {}; // Almacena cuántas veces se ha escuchado cada palabra

function contarPalabraEscuchada(palabra) {
    if (palabrasRepetidas[palabra]) {
        palabrasRepetidas[palabra]++;
    } else {
        palabrasRepetidas[palabra] = 1;
    }
}

// Función para actualizar la barra de progreso
function actualizarProgreso() {
    let progreso = document.getElementById("progreso");
    progreso.value = indiceActual;
    progreso.max = cantidadPalabras; // Asegura que el máximo de la barra de progreso coincida con la cantidad de palabras
}

// Función para reproducir el audio de la palabra actual usando la API Web Speech
function reproducirAudio() {
    let palabraActual = document.getElementById("palabra").textContent; // Obtiene la palabra actual
    let utterance = new SpeechSynthesisUtterance(palabraActual);
    speechSynthesis.speak(utterance);

    contarPalabraEscuchada(palabraActual); // Incrementa el contador de la palabra
}

function marcarModuloCompleto(moduloNumero) {
    localStorage.setItem(`modulo${moduloNumero}Completo`, true);
    console.log(`Modulo ${moduloNumero} completado y guardado en localStorage.`);
}


// Validar si los tres módulos han sido completados
function validarModulosCompletados() {
    const modulo1Completado = localStorage.getItem('modulo1Completo') === 'true';
    const modulo2Completado = localStorage.getItem('modulo2Completo') === 'true';
    const modulo3Completado = localStorage.getItem('modulo3Completo') === 'true';

    return modulo1Completado && modulo2Completado && modulo3Completado;
}

// Función para mostrar el botón "Examen Final" si los tres módulos están completados
function mostrarBotonExamenFinal() {
    const examenFinalButton = document.getElementById("examen-final-btn");

    if (validarModulosCompletados()) {
        examenFinalButton.style.display = "inline-block"; // Mostrar el botón si todos los módulos están completos
    } else {
        examenFinalButton.style.display = "none"; // Ocultar el botón si faltan módulos
    }
}

// Función para redirigir al examen final
function irAlExamenFinal() {
    if (validarModulosCompletados()) {
        window.location.href = 'bienvenida.html?modulo=5';
    } else {
        alert("Para entrar al Examen Final debes completar los 3 módulos.");
    }
}

function mostrarResultados() {
    document.getElementById("palabra-container").style.display = "none";
    document.getElementById("seguir-button").style.display = "none";
    document.getElementById("escuchar-button").style.display = "none";
    document.getElementById("barra-progreso").style.display = "none";
    document.getElementById("resultados").style.display = "block";
    
    // Mostrar las palabras seleccionadas en los resultados
    const resultadosDiv = document.getElementById("palabras-mostradas");
    resultadosDiv.innerHTML = ""; // Limpiar contenido previo
    palabrasSeleccionadas.forEach(palabra => {
        const palabraElement = document.createElement("p");
        palabraElement.textContent = palabra;
        resultadosDiv.appendChild(palabraElement);
    });

    let puntosObtenidos = document.getElementById("puntos-obtenidos");
    if (puntosObtenidos) {
        puntosObtenidos.textContent = "¡Has ganado 100 puntos!";
    } else {
        console.error('El elemento #puntos-obtenidos no se encontró en el DOM.');
    }

        // Guardar que el módulo 3 fue completado
        marcarModuloCompleto(3);

        // Verificar si los tres módulos están completos para mostrar el botón "Examen Final"
        mostrarBotonExamenFinal();

    // Mostrar los botones para volver a jugar o regresar
    document.getElementById("volver-jugar-btn").style.display = "inline-block";
    document.getElementById("regresar-btn").style.display = "inline-block";
}

// Añadir el evento de clic al botón "Examen Final"
document.getElementById('examen-final-btn').onclick = irAlExamenFinal;

function enviarPuntos(puntos) {
    fetch('guardar_puntos.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            puntos: puntos,
            modulo: 3 //numero de modulo
        }),
    })
    .then(response => response.text()) 
    .then(text => {
        console.log('Respuesta del servidor:', text); 
        try {
            let data = JSON.parse(text); 
            console.log('Respuesta JSON del servidor:', data);
        } catch (error) {
            console.error('Error al parsear JSON:', error);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function obtenerPalabrasMasEscuchadas() {
    let palabrasArray = Object.entries(palabrasRepetidas); 
    palabrasArray.sort((a, b) => b[1] - a[1]); // Ordena de mayor a menor por el número de veces que se escuchó

    return palabrasArray.slice(0, 3); // Devuelve las 3 más escuchadas
}

function mostrarSugerencias(palabrasMasEscuchadas) {
    let sugerenciasDiv = document.getElementById("sugerencias"); // Asegúrate de tener un contenedor para mostrar las sugerencias
    sugerenciasDiv.innerHTML = ""; // Limpiar el contenido previo

    palabrasMasEscuchadas.forEach(([palabra, veces]) => {
        let sugerencia = document.createElement("p");
        sugerencia.textContent = `Has escuchado la palabra "${palabra}" ${veces} veces. Sugerencia: Intenta practicar la pronunciación en voz alta.`;
        sugerenciasDiv.appendChild(sugerencia);

    });

    let modalSugerencias = document.getElementById("modal-sugerencias");
    if (modalSugerencias) {
        modalSugerencias.style.display = "block";
    } else {
        console.error('El elemento #modal-sugerencias no se encontró en el DOM.');
    }

    // Cierra el modal de sugerencias al hacer clic en el botón "Listo"
    let listoBtn = document.getElementById("listo-btn");
    if (listoBtn) {
        listoBtn.onclick = function() {
            modalSugerencias.style.display = "none"; // Cierra el modal de sugerencias
            mostrarResultados(); // Muestra los resultados
        };
    }   
}

/// Función para mostrar el modal final
function mostrarModalFinal() {
    let modalFinal = document.getElementById("modal-final");
    let modalSugerencias = document.getElementById("modal-sugerencias");
   

    reproducirSonidoFinal(); // Reproducir el sonido

    modalSugerencias.style.display = "block";

 // Mostrar las palabras más repetidas y sugerencias
 let palabrasMasEscuchadas = obtenerPalabrasMasEscuchadas();
 mostrarSugerencias(palabrasMasEscuchadas);

 let listoBtn = document.getElementById("listo-btn");
 listoBtn.onclick = function() {
     modalSugerencias.style.display = "none"; // Cierra el modal de sugerencias

     // Mostrar el modal final
    // modalFinal.style.display = "block";
        mostrarResultados();

        // Enviar los puntos al finalizar el módulo
        if (moduloFinalizado) {
            enviarPuntos(100); 
        }
    };
}

// Función para regresar al inicio
function regresar() {
    window.location.href = 'index.php';
}

// Función para reiniciar el módulo
function reiniciarModulo() {
    indiceActual = 0;
    moduloFinalizado = false;
    seleccionarPalabrasAlAzar(); // Selecciona un nuevo conjunto de palabras al azar
    document.getElementById("palabra-container").style.display = "block";
    document.getElementById("seguir-button").style.display = "inline-block";
    document.getElementById("escuchar-button").style.display = "inline-block";
    document.getElementById("barra-progreso").style.display = "block";
    document.getElementById("resultados").style.display = "none";
    document.getElementById("volver-jugar-btn").style.display = "none";
    document.getElementById("regresar-btn").style.display = "none";
    actualizarProgreso(); // Inicializa la barra de progreso
    mostrarSiguientePalabra();
}

// Evento de clic para el botón "Seguir"
document.getElementById("seguir-button").onclick = function() {
    if (indiceActual === cantidadPalabras) {
        moduloFinalizado = true; // Marcar el módulo como finalizado
    }
    mostrarSiguientePalabra();
};

// Evento de clic para el botón "Escuchar"
document.getElementById("escuchar-button").onclick = function() {
    reproducirAudio();
};

// Cerrar el modal final cuando se hace clic fuera de él o en el botón "Listo"
document.getElementById("listo-btn").onclick = function() {
    let modalSugerencias = document.getElementById("modal-sugerencias");
    modalSugerencias.style.display = "none"; // Cierra el modal de sugerencias
    mostrarResultados(); // Muestra los resultados y los botones después de cerrar el modal
};

window.onclick = function(event) {
    let modalFinal = document.getElementById("modal-final");
    let modalSugerencias = document.getElementById("modal-sugerencias");

    if (event.target === modalFinal) {
        modalFinal.style.display = "none"; // Cierra solo el modal final si se hace clic fuera de él
    } else if (event.target === modalSugerencias) {
        modalSugerencias.style.display = "none"; // Cierra solo el modal de sugerencias si se hace clic fuera de él
    }
};

// Evento de clic para el botón "Volver a Jugar"
document.getElementById("volver-jugar-btn").onclick = function() {
    reiniciarModulo(); // Volver a jugar reiniciando el módulo
};

// Evento de clic para el botón "Regresar"
document.getElementById("regresar-btn").onclick = function() {
    regresar(); // Regresar a la pantalla principal
};

// Función para cerrar el modal
function cerrarModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Función para abrir el modal
function abrirModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}
// Función para ir al módulo 4
function irAlModulo4() {
    window.location.href = 'bienvenida.html?modulo=4';
}

// Función para reproducir el sonido al mostrar el modal final
function reproducirSonidoFinal() {
    const audio = new Audio('sounds/grito.wav');
    audio.play().catch(error => {
        console.error('Error al reproducir el sonido:', error);
    });
}

document.getElementById('ir-al-modulo-4').addEventListener('click', irAlModulo4);

// Inicialización
window.onload = function() {
    seleccionarPalabrasAlAzar();
    mostrarSiguientePalabra();
    mostrarBotonExamenFinal(); 
};
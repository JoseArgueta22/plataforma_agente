let oraciones = [
    { oracion: "El _____ es muy rápido.", opciones: ["gato", "perro", "carro"], correcta: "carro" },
    { oracion: "El _____ es el rey de la selva.", opciones: ["león", "tigre", "oso"], correcta: "león" },
    { oracion: "El _____ vuela en el cielo.", opciones: ["barco", "avión", "tren"], correcta: "avión" },
    { oracion: "El _____ vive en el agua.", opciones: ["perro", "gato", "tiburón"], correcta: "tiburón" },
    { oracion: "La _____ es una fruta.", opciones: ["manzana", "zanahoria", "papa"], correcta: "manzana" },
    { oracion: "El _____ es un animal que dice cuac.", opciones: ["ballenta", "pato", "tortuga"], correcta: "pato" },
    { oracion: "El _____ es amarillo y brilla en el cielo.", opciones: ["sol", "luna", "estrella"], correcta: "sol" },
    { oracion: "La _____ es de color verde y salta.", opciones: ["ardilla", "perro", "rana"], correcta: "rana" },
    { oracion: "La _____ es un insecto que hace miel.", opciones: ["hormiga", "mosca", "abeja"], correcta: "abeja" },
    { oracion: "El _____ es un animal que vive en la nieve y tiene pelaje blanco.", opciones: ["oso polar", "zorro", "león"], correcta: "oso polar" },
    { oracion: "La _____ es de color roja y tiene semillas.", opciones: ["pepino", "fresa", "lechuga"], correcta: "fresa" },
    { oracion: "La _____ tiene cuatro patas y da leche.", opciones: ["cabra", "pato", "gallina"], correcta: "cabra" },
    { oracion: "La _____ nos da lana.", opciones: ["caballo", "gato", "oveja"], correcta: "oveja" },
    { oracion: "El _____ es una fruta amarillo y alargado.", opciones: ["uva", "naranja", "banano"], correcta: "banano" },
    { oracion: "El _____ es un animal que tiene un cuerno.", opciones: ["rinoceronte", "gato", "perro"], correcta: "rinoceronte" },
    { oracion: "La _____ es una verdura de color naranja.", opciones: ["limón", "zanahoria", "manzana"], correcta: "zanahoria" },
    { oracion: "El _____ tiene orejas largas y salta mucho.", opciones: ["perro", "conejo", "pájaro"], correcta: "conejo" },
    { oracion: "El _____ vive en la granja y hace 'pio pio'.", opciones: ["pollito", "perro", "gato"], correcta: "pollito" },
    { oracion: "El _____ es un medio de transporte que va por las vías.", opciones: ["motocicleta", "tren", "avión"], correcta: "tren" },
    { oracion: "La _____ nos ayuda a ver las estrellas en la noche.", opciones: ["luna", "sol", "nube"], correcta: "luna" },
    { oracion: "El _____ nos despierta en la mañana con su canto.", opciones: ["gato", "perro", "gallo"], correcta: "gallo" },
    { oracion: "La _____ tiene muchas patas y camina despacio.", opciones: ["caracol", "araña", "conejo"], correcta: "araña" },
    { oracion: "La _____ es una planta que produce frutos y se usa en ensaladas.", opciones: ["piedra", "lechuga", "raíz"], correcta: "lechuga" },
    { oracion: "El _____ es un ave que no vuela y es de color negro y blanco.", opciones: ["pingüino", "águila", "loro"], correcta: "pingüino" },
    { oracion: "El _____ es redondo y lo usamos para jugar fútbol.", opciones: ["trompo", "balón", "peluche"], correcta: "balón" },
    { oracion: "El _____ nos da sombra cuando hace mucho sol.", opciones: ["árbol", "flor", "nube"], correcta: "árbol" },
    { oracion: "El _____ es un reptil que cambia de color.", opciones: ["camaleón", "perro", "gato"], correcta: "camaleón" },
    { oracion: "La _____ se mueve con el viento y es blanca.", opciones: ["ola", "nube", "estrella"], correcta: "nube" },
    { oracion: "El _____ corre muy rápido y tiene manchas negras.", opciones: ["guepardo", "oso", "elefante"], correcta: "guepardo" },
    { oracion: "El _____ es un animal que vive en el desierto.", opciones: ["pez", "camello", "gallina"], correcta: "camello" },
    { oracion: "La _____ es de color morado y crece en racimos.", opciones: ["manzana", "uva", "pera"], correcta: "uva" },
    { oracion: "La _____ tiene manchas negras y blancas y nos da leche.", opciones: ["oveja", "caballo", "vaca"], correcta: "vaca" },
    { oracion: "El _____ vuela de flor en flor y es muy colorido.", opciones: ["colibrí", "tiburón", "león"], correcta: "colibrí" },
    { oracion: "La _____ es dulce y se puede comer en rebanadas.", opciones: ["melón", "sandía", "lechuga"], correcta: "sandía" },
    { oracion: "El _____ vive en el océano y tiene tentáculos.", opciones: ["pulpo", "elefante", "conejo"], correcta: "pulpo" },
    { oracion: "La _____ tiene orejas grandes y una cola larga.", opciones: ["oso", "gato", "rata"], correcta: "rata" },
    { oracion: "La _____ crece bajo la tierra y es de color blanco.", opciones: ["fresa", "cebolla", "manzana"], correcta: "cebolla" },
    { oracion: "La _____ es amarilla y la vemos en el cielo por la noche.", opciones: ["noche", "estrella", "árbol"], correcta: "estrella" },
    { oracion: "La _____ tiene cinco brazos y vive en el agua.", opciones: ["estrella de mar", "ardilla", "conejo"], correcta: "estrella de mar" },
    { oracion: "El _____ es un pájaro rosado que vive en el agua y tiene patas largas.", opciones: ["ratón", "perro", "flamenco"], correcta: "flamenco" },
    { oracion: "La _____ es un vehículo que vuela por el cielo.", opciones: ["avioneta", "bicicleta", "moto"], correcta: "avioneta" },
    { oracion: "El _____ es un animal pequeño que hace 'ñam ñam' en el queso.", opciones: ["zebra", "ratón", "león"], correcta: "ratón" },
    { oracion: "El _____ es un insecto que salta y hace 'cri cri'.", opciones: ["hormiga", "grillo", "mosquito"], correcta: "grillo" },
    { oracion: "La _____ es una fruta pequeña y de color rojo.", opciones: ["uva", "manzana", "cereza"], correcta: "cereza" },
    { oracion: "El _____ es un animal que vive en el mar y tiene aletas.", opciones: ["delfín", "gato", "conejo"], correcta: "delfín" },
    { oracion: "La _____ es un insecto que camina en fila y carga hojas.", opciones: ["mosca", "hormiga", "abeja"], correcta: "hormiga" },
    { oracion: "El _____ es un mamífero que vive en el agua y tiene un cuerpo grande.", opciones: ["delfín", "hipopótamo", "tiburón"], correcta: "hipopótamo" },
    { oracion: "La _____ tiene plumas y pone huevos.", opciones: ["mono", "vaca", "gallina"], correcta: "gallina" },
    { oracion: "La _____ es blanca y la produce la vaca.", opciones: ["sopa", "agua", "leche"], correcta: "leche" },
    { oracion: "La _____ es un insecto que brilla en la oscuridad.", opciones: ["luciérnaga", "mosca", "araña"], correcta: "luciérnaga" },
    { oracion: "La _____ es dulce y la usan las abejas para hacer miel.", opciones: ["roca", "hoja", "rosa"], correcta: "rosa" },
    { oracion: "   _____ es un planeta conocido como el 'planeta rojo' por su color característico.", opciones: ["Venus", "Marte", "Júpiter"], correcta: "Marte" },
    { oracion: "El _____ es un vegetal que es largo y verde.", opciones: ["pepino", "zanahoria", "papa"], correcta: "pepino" },
    { oracion: "El _____ es un animal que tiene grandes colmillos y trompa.", opciones: ["elefante", "león", "jirafa"], correcta: "elefante" },
    { oracion: "El _____ es de color amarillo y crece en los campos.", opciones: ["flor", "maíz", "piña"], correcta: "maíz" },
    { oracion: "La _____ es un instrumento musical que se toca con los dedos y tiene cuerdas.", opciones: ["piano", "trompeta", "guitarra"], correcta: "guitarra" },
    { oracion: "La _____ es un insecto que tiene alas de muchos colores.", opciones: ["mariposa", "abeja", "hormiga"], correcta: "mariposa" },
    { oracion: "El _____ vive en el bosque y tiene cuernos grandes.", opciones: ["vaca", "conejo", "venado"], correcta: "venado" },
    { oracion: "La _____ es un reptil que tiene una lengua larga y se arrastra.", opciones: ["serpiente", "ratón", "pato"], correcta: "serpiente" },
    { oracion: "El _____ tiene plumas de colores y repite palabras.", opciones: ["gato", "perro", "loro"], correcta: "loro" },
    { oracion: "La _____ crece en el suelo y es de color marrón.", opciones: ["manzana", "papa", "uva"], correcta: "papa" },
    { oracion: "El _____ es un instrumento musical de cuerda que se toca con un arco.", opciones: ["piano", "violín", "batería"], correcta: "violín" },
    { oracion: "El _____ es una bebida que se elabora a partir de granos tostados y se consume caliente.", opciones: ["café", "agua", "sopa"], correcta: "café" },
    { oracion: "El _____ es un órgano del cuerpo humano que bombea sangre a todo el organismo.", opciones: ["pulmón", "hígado", "corazón"], correcta: "corazón" },
    { oracion: "La _____ es muy alto y tiene manchas negras en su cuerpo.", opciones: ["perro", "gato", "jirafa"], correcta: "jirafa" },
    { oracion: "El _____ es una planta que produce flores de colores brillantes y es conocida por atraer mariposas.", opciones: ["cactus", "margarita", "lavanda"], correcta: "margarita" },
    { oracion: "La _____ es un animal que vive en el océano y es muy grande.", opciones: ["ballena", "gato", "ratón"], correcta: "ballena" },
    { oracion: "La _____ es una fruta que es naranja y tiene una cascara gruesa.", opciones: ["pera", "manzana", "naranja"], correcta: "naranja" },
    { oracion: "La _____ es un animal con caparazón que camina lento.", opciones: ["tortuga", "gato", "perro"], correcta: "tortuga" },
    { oracion: "El _____ es un lugar donde se cultivan diversas plantas y flores.", opciones: ["oceano", "desierto", "jardín"], correcta: "jardín" },
    { oracion: "El _____ es de color roja y se usa en ensaladas.", opciones: ["tomate", "zanahoria", "papa"], correcta: "tomate" },
    { oracion: "El _____ vive en la jungla y tiene rayas negras y naranjas.", opciones: ["oso", "tigre", "jirafa"], correcta: "tigre" },
    { oracion: "El _____ es una fruta que es pequeña y azul.", opciones: ["arándano", "manzana", "pera"], correcta: "arándano" },
    { oracion: "El _____ es un animal que se mueve muy despacio y tiene una concha.", opciones: ["gato", "caracol", "conejo"], correcta: "caracol" },
    { oracion: "La _____ es dulce, blanca y se usa en pasteles.", opciones: ["azúcar", "sal", "pimienta"], correcta: "azúcar" },
    { oracion: "El _____ es un animal grande que vive en la selva y come plátanos.", opciones: ["rana", "gorila", "zorro"], correcta: "gorila" },
    { oracion: "El _____ vive en el bosque y tiene un pelaje marrón.", opciones: ["sapo", "oso", "gato"], correcta: "oso" },
    { oracion: "El _____ es un pez colorido que vive en los arrecifes de coral.", opciones: ["pez payaso", "tiburón", "delfín"], correcta: "pez payaso" },
    { oracion: "El _____ es un animal que nada en el agua y tiene escamas.", opciones: ["gato", "pájaro", "pez"], correcta: "pez" },
    { oracion: "El _____ tiene alas grandes y vuela alto en el cielo.", opciones: ["águila", "ratón", "gato"], correcta: "águila" },
    { oracion: "La _____ es un vehículo que corre por dos llantas.", opciones: ["motocicleta", "barco", "auto"], correcta: "motocicleta" },
    { oracion: "El _____ es un animal nocturno que tiene orejas grandes y es conocido por su canto.", opciones: ["cocodrilo", "buhó", "perro"], correcta: "búho" },
    { oracion: "El _____ vive en las montañas y tiene cuernos grandes.", opciones: ["guepardo", "carnero", "pájaro"], correcta: "carnero" },
    { oracion: "El _____ es el mejor amigo del hombre.", opciones: ["mono", "perro", "conejo"], correcta: "perro" },
    { oracion: "El _____ es un animal que no se revuelca en el lodo y vive en granjas.", opciones: ["loro", "cerdo", "pato"], correcta: "cerdo" },
    { oracion: "El _____ tiene una cola larga y puede colgarse de los árboles.", opciones: ["ratón", "mono", "jirafa"], correcta: "mono" },
    { oracion: "El _____ es de color café y se utiliza para hacer el chocolate.", opciones: ["piña", "cacao", "zanahoria"], correcta: "cacao" },
    { oracion: "El _____ es un animal astuto que a menudo vive en manadas.", opciones: ["ciervo", "zorro", "gato"], correcta: "zorro" },
    { oracion: "El _____ es un mamífero que vuela y vive en cuevas.", opciones: ["murciélago", "gato", "ratón"], correcta: "murciélago" },
    { oracion: "La _____ es una bebida que se hace con limones.", opciones: ["soda", "agua", "limonada"], correcta: "limonada" },
    { oracion: "El _____ es un fenómeno natural que puede causar grandes daños y se produce por movimientos en la tierra.", opciones: ["terremoto", "huracán", "tornado"], correcta: "terremoto" },
    { oracion: "El _____ es un dulce que se hace con leche y azúcar.", opciones: ["lechuga", "pan", "caramelo"], correcta: "caramelo" },
    { oracion: "El _____ produce luz y sonido durante una tormenta y es muy rápido.", opciones: ["lluvia", "rayo", "nieve"], correcta: "rayo" },
    { oracion: "La _____ es un insecto que vuela y tiene una picadura.", opciones: ["sapo", "ratón", "avispa"], correcta: "avispa" },
    { oracion: "El _____ es conocido por su canto melodioso y su plumaje brillante.", opciones: ["loro", "canario", "murciélago"], correcta: "canario" },
    { oracion: "La _____ es una fruta tropical que es dulce y amarilla.", opciones: ["tomate", "manzana", "piña"], correcta: "piña" },
    { oracion: "El _____ es un lugar donde se pueden encontrar muchos libros y estudiar en silencio.", opciones: ["cine", "restaurante", "biblioteca"], correcta: "biblioteca" },
    { oracion: "El _____ es una planta que tiene espinas y crece en el desierto.", opciones: ["cactus", "árbol", "flor"], correcta: "cactus" },
    { oracion: "El _____ es un gran cuerpo de agua que cubre gran parte de la Tierra.", opciones: ["río", "lago", "mar"], correcta: "mar" },
    { oracion: "El _____ es un vehículo grande que transporta mercancías.", opciones: ["automóvil", "camión", "bicicleta"], correcta: "camión" },
    { oracion: "La _____ está llena de edificios altos y muchas personas.", opciones: ["aldea", "ciudad", "pueblo"], correcta: "ciudad" },
    { oracion: "El _____ es un animal que se usa para montar y trabajar en el campo.", opciones: ["vaca", "caballo", "oveja"], correcta: "caballo" },
    { oracion: "La _____ ilumina la habitación cuando es de noche.", opciones: ["silla", "mesa", "lámpara"], correcta: "lámpara" },
    { oracion: "El _____ nos permite comunicarnos con otras personas a distancia.", opciones: ["computadora", "teléfono", "radio"], correcta: "teléfono" },
    { oracion: "La _____ es un objeto redondo que se utiliza para jugar muchos deportes.", opciones: ["pelota", "raqueta", "red"], correcta: "pelota" },
    { oracion: "El _____ marca la hora y nos ayuda a ser puntuales.", opciones: ["calendario", "reloj", "alarma"], correcta: "reloj" },
    { oracion: "La _____ es un lugar donde nadamos y nos refrescamos en verano.", opciones: ["playa", "piscina", "río"], correcta: "piscina" },
    { oracion: "La _____ es una herramienta que usamos para trabajar y aprender.", opciones: ["computadora", "teléfono", "escritorio"], correcta: "computadora" },
    { oracion: "La _____ toca música en vivo durante los eventos.", opciones: ["orquesta", "banda", "cantante"], correcta: "banda" },
    { oracion: "El _____ es un instrumento que usamos para escribir en papel.", opciones: ["lapicero", "pluma", "tinta"], correcta: "lapicero" },
    { oracion: "El _____ es una forma de expresión artística que se realiza con movimientos del cuerpo.", opciones: ["música", "baile", "teatro"], correcta: "baile" },
    { oracion: "La _____ cubre la tierra en invierno y es fría al tacto.", opciones: ["nieve", "lluvia", "granizo"], correcta: "nieve" }
];
let estado = {
    respuestasCorrectas: 0,
    respuestasIncorrectas: 0, // Contador de respuestas incorrectas
    respuestasUsuario: [],
    indiceActual: 0,
    oracionesSeleccionadas: [],
    totalOraciones: 7,
    oracionActual: null,
    oracionesRespondidas: [],
    puntos: 0 // Acumulador de puntos
};

// Función para inicializar el módulo
function iniciarModulo() {
    estado.oracionesSeleccionadas = oraciones.sort(() => 0.5 - Math.random()).slice(0, estado.totalOraciones);
    estado.indiceActual = 0;
    estado.respuestasCorrectas = 0;
    estado.respuestasIncorrectas = 0; // Reiniciar el contador de respuestas incorrectas
    estado.respuestasUsuario = [];
    estado.oracionesRespondidas = [];
    estado.puntos = 0; // Reiniciar los puntos
    
    document.getElementById("progreso").value = 0;
    document.getElementById("progreso").max = estado.totalOraciones;

    cargarOracion();
}

// Función para cargar la próxima oración
function cargarOracion() {
    if (estado.indiceActual < estado.totalOraciones) {
        estado.oracionActual = estado.oracionesSeleccionadas[estado.indiceActual];
        mostrarOracion(estado.oracionActual);
    } else {
        finalizarModulo();
    }
}

// Función para mostrar la oración actual y sus opciones
function mostrarOracion(oracion) {
    document.getElementById("oracion-incompleta").innerHTML = oracion.oracion.replace("_____", "<span id='espacio-palabra'>_____</span>");
    let opcionesHTML = "";
    oracion.opciones.forEach(opcion => {
        opcionesHTML += `<button class="opcion" onclick="seleccionarOpcion('${opcion}')">${opcion}</button>`;
    });
    document.getElementById("opciones-container").innerHTML = opcionesHTML;

    // Limpiar mensaje de correcto/incorrecto
    let mensaje = document.getElementById("mensaje");
    mensaje.textContent = "";
    mensaje.style.color = "";
}

// Función para manejar la selección de una opción
function seleccionarOpcion(opcionSeleccionada) {
    let correcta = estado.oracionActual.correcta;
    let mensaje = document.getElementById("mensaje");

    // Guardar la respuesta
    estado.respuestasUsuario.push({
        oracion: estado.oracionActual.oracion,
        respuestaUsuario: opcionSeleccionada,
        respuestaCorrecta: correcta
    });

    // Añadir la oración a las respondidas
    estado.oracionesRespondidas.push(estado.oracionActual);

    // Obtener la retroalimentación del agente
    let retroalimentacionAgente = agente.darRetroalimentacion(correcta, opcionSeleccionada);

    if (opcionSeleccionada === correcta) {
        estado.respuestasCorrectas++;
        estado.puntos += 5; // Sumar puntos por respuesta correcta
        mensaje.textContent = retroalimentacionAgente + " +5 puntos.";
        mensaje.style.color = "green";
        document.getElementById("sonido-correcto").play();
    } else {
        estado.respuestasIncorrectas++;
        estado.puntos -= 3; // Restar puntos por respuesta incorrecta
        mensaje.textContent = retroalimentacionAgente + " -3 puntos.";
        mensaje.style.color = "red";
    }

    // Pasar a la siguiente oración
    estado.indiceActual++;

    // Actualizar barra de progreso
    document.getElementById("progreso").value = estado.indiceActual;

    // Limpiar mensaje después de un segundo
    setTimeout(() => {
        document.getElementById("mensaje").textContent = "";
        cargarOracion();
    }, 2000); // Aumentado el tiempo para mostrar el mensaje del agente
}

let agente = {
    nivel: "Equilibrado", // Puede ser "Preciso", "Equilibrado" o "Creativo"
    
    // Comentarios personalizados basados en el nivel
    darRetroalimentacion: function(opcionCorrecta, seleccionada) {
        if (this.nivel === "Preciso") {
            return this.retroalimentacionPrecisa(opcionCorrecta, seleccionada);
        } else if (this.nivel === "Equilibrado") {
            return this.retroalimentacionEquilibrada(opcionCorrecta, seleccionada);
        } else if (this.nivel === "Creativo") {
            return this.retroalimentacionCreativa(opcionCorrecta, seleccionada);
        }
    },
    
    // Retroalimentación precisa: clara y directa
    retroalimentacionPrecisa: function(correcta, seleccionada) {
        if (seleccionada === correcta) {
            return "Correcto. Continúa así.";
        } else {
            return `Incorrecto. La palabra correcta era '${correcta}'.`;
        }
    },
    
    // Retroalimentación equilibrada: algo motivacional
    retroalimentacionEquilibrada: function(correcta, seleccionada) {
        if (seleccionada === correcta) {
            return "¡Bien hecho! Sigue trabajando con la misma energía.";
        } else {
            return `Casi lo logras. La palabra correcta era '${correcta}'. ¡No te rindas!`;
        }
    },
    
    // Retroalimentación creativa: comentarios variados
    retroalimentacionCreativa: function(correcta, seleccionada) {
        if (seleccionada === correcta) {
            return "¡Increíble! ¡Eres todo un genio del lenguaje! 🌟";
        } else {
            return `¡Uy! La palabra correcta era '${correcta}', pero sigue intentando, ¡la próxima será tuya! 🚀`;
        }
    }
};

function cambiarNivelAgente() {
    let nivelSeleccionado = document.getElementById("nivel-agente").value;
    agente.nivel = nivelSeleccionado;
    console.log("Nivel del agente cambiado a:", nivelSeleccionado);
}

// Función para cambiar a otra oración al azar sin afectar el índice actual
function cambiarOracion() {
    // Filtrar las oraciones para evitar mostrar las ya respondidas
    let opcionesDisponibles = oraciones.filter(o => !estado.oracionesRespondidas.includes(o) && !estado.oracionesSeleccionadas.includes(o));
    if (opcionesDisponibles.length > 0) {
        let nuevaOracion = opcionesDisponibles[Math.floor(Math.random() * opcionesDisponibles.length)];
        estado.oracionActual = nuevaOracion;
        mostrarOracion(nuevaOracion);
    } else {
        alert("No hay más oraciones disponibles para cambiar.");
    }
}

// Función para mostrar el modal
function mostrarModalFinal() {
    document.getElementById("modal-final").style.display = "block";

    // cerrar el modal
    document.getElementById("cerrar-modal-btn").onclick = function() {
        cerrarModal();
    };

    // Hacer clic en el botón "Listo" para cerrar el modal
    document.getElementById("listo-btn").onclick = function() {
        cerrarModal();
    };

    // Cerrar modal si se hace clic fuera del contenido
    window.onclick = function(event) {
        let modal = document.getElementById("modal-final");
        if (event.target == modal) {
            cerrarModal();
        }
    };
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modal-final").style.display = "none";
}

// Función para finalizar el módulo y mostrar los resultados
function finalizarModulo() {
    document.getElementById("oracion-container").style.display = "none";
    document.getElementById("opciones-container").style.display = "none";

    let resultadosTexto = `Has completado el módulo. Respuestas correctas: ${estado.respuestasCorrectas} de ${estado.totalOraciones}.<br>Puntos Totales: ${estado.puntos}<br><br>`;
    
    estado.respuestasUsuario.forEach((respuesta, index) => {
        resultadosTexto += `${index + 1}. Oración: ${respuesta.oracion}<br>Tu respuesta: ${respuesta.respuestaUsuario}<br>Respuesta correcta: ${respuesta.respuestaCorrecta}<br><br>`;
    });

    document.getElementById("resultados-texto").innerHTML = resultadosTexto;
    document.getElementById("resultados-container").style.display = "block";
    document.getElementById("sonido-fin-modulo").play();

    // Mostrar el modal final
    mostrarModalFinal();
    enviarPuntosAlServidor(); // Enviar los puntos al servidor
    marcarModuloCompleto(2);
}

// Función para enviar los puntos al servidor
function enviarPuntosAlServidor() {
    const puntos = estado.puntos;
    const modulo = 2; // Número de módulo

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

// Función para regresar al inicio
function regresarAlInicio() {
    window.location.href = 'index.php';
}

// Función para reiniciar el módulo
function reiniciarModulo() {
    window.location.reload();
}

// Función para ir al Módulo 3
function irAlModulo3() {
    window.location.href = 'bienvenida.html?modulo=3';
}

function marcarModuloCompleto(modulo) {
    localStorage.setItem(`modulo${modulo}Completo`, 'true');
    console.log(`Modulo ${modulo} completado y guardado en localStorage.`);
}

// Cargar la primera oración cuando la página se carga
window.onload = iniciarModulo;

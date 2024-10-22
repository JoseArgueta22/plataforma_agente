let respuestasCorrectas = 0;
let puntuacionTotal = 0;
let parteActual = 1;
let puntosEnviados = false; 

// Variables para almacenar las preguntas y frases seleccionadas aleatoriamente
let preguntasSeleccionadasParte1 = [];
let frasesSeleccionadasParte2 = [];
let oracionesSeleccionadasParte3 = [];

// Preguntas parte 1
const preguntasParte1 = [
    { pregunta: "¿Cuál de estas es una fruta?", opciones: ["manzana", "perro", "coche"], respuestaCorrecta: "manzana" },
    { pregunta: "¿Qué animal dice 'miau'?", opciones: ["pato", "gato", "vaca"], respuestaCorrecta: "gato" },
    { pregunta: "¿Qué color es el cielo?", opciones: ["rojo", "azul", "verde"], respuestaCorrecta: "azul" },
    { pregunta: "¿Cuál es un medio de transporte?", opciones: ["avión", "árbol", "perro"], respuestaCorrecta: "avión" },
    { pregunta: "¿Qué comemos en el desayuno?", opciones: ["silla", "mesa", "cereal"], respuestaCorrecta: "cereal" },
    { pregunta: "¿Qué instrumento se toca con las manos y tiene teclas?", opciones: ["Trompeta", "piano", "Triángulo"], respuestaCorrecta: "piano" },
    { pregunta: "¿Cuál dispositivo nos ayuda a realizar una llama telefónica?", opciones: ["Microondas", "Celular", "Radio"], respuestaCorrecta: "Celular" },
    { pregunta: "¿Qué es más rápido?", opciones: ["coche", "bicicleta", "avión"], respuestaCorrecta: "avión" },
    { pregunta: "¿Qué animal vuela?", opciones: ["pájaro", "perro", "gato"], respuestaCorrecta: "pájaro" },
    { pregunta: "¿Qué se usa para escribir?", opciones: ["vaso", "cuchara", "lápiz"], respuestaCorrecta: "lápiz" },
    { pregunta: "¿Cuál de estos es un animal?", opciones: ["elefante", "mesa", "pelota"], respuestaCorrecta: "elefante" },
    { pregunta: "¿Qué color son los plátanos?", opciones: ["negro", "amarillo", "azul"], respuestaCorrecta: "amarillo" },
    { pregunta: "¿Cuál es el sonido de un perro?", opciones: ["miau", "guau", "pío"], respuestaCorrecta: "guau" },
    { pregunta: "¿Qué usamos para nadar?", opciones: ["traje de baño", "sombrero", "zapatos"], respuestaCorrecta: "traje de baño" },
    { pregunta: "¿Cuál de estos es un insecto?", opciones: ["pez", "mariposa", "gato"], respuestaCorrecta: "mariposa" },
    { pregunta: "¿Qué comemos para merendar?", opciones: ["galleta", "silla", "pelota"], respuestaCorrecta: "galleta" },
    { pregunta: "¿Cuál es el sonido de una vaca?", opciones: ["miau", "mu", "guau"], respuestaCorrecta: "mu" },
    { pregunta: "¿Qué usamos para dibujar?", opciones: ["camisa", "zapato", "pincel"], respuestaCorrecta: "pincel" },
    { pregunta: "¿Cuál es un lugar para jugar?", opciones: ["parque", "cocina", "baño"], respuestaCorrecta: "parque" },
    { pregunta: "¿Cuál de estos es un animal marino?", opciones: ["perro", "pez", "pájaro"], respuestaCorrecta: "pez" },
    { pregunta: "¿Qué usamos para ver?", opciones: ["ojos", "manos", "boca"], respuestaCorrecta: "ojos" },
    { pregunta: "¿Cuál es un tipo de flor?", opciones: ["bola", "mesa", "rosa"], respuestaCorrecta: "rosa" },
    { pregunta: "¿Qué fruta es roja y dulce?", opciones: ["uva", "pasta", "fresa"], respuestaCorrecta: "fresa" },
    { pregunta: "¿Cuál es un tipo de bebida?", opciones: ["agua", "zapato", "silla"], respuestaCorrecta: "agua" },
    { pregunta: "¿Qué usamos para escuchar música?", opciones: ["cama", "audiculares", "mesa"], respuestaCorrecta: "auriculares" },
    { pregunta: "¿Cuál es el sonido de un gallo?", opciones: ["miau", "Kikiriki", "guau"], respuestaCorrecta: "Kikiriki" },
    { pregunta: "¿Qué hacemos con un libro?", opciones: ["leer", "comer", "jugar"], respuestaCorrecta: "leer" },
    { pregunta: "¿Cuál es un animal que vive en la granja?", opciones: ["pez", "oveja", "tortuga"], respuestaCorrecta: "oveja" },
    { pregunta: "¿Cuál de estos es un medio de transporte por agua?", opciones: ["barco", "bicicleta", "autobús"], respuestaCorrecta: "barco" },
    { pregunta: "¿Qué animal tiene cola larga y es muy juguetón?", opciones: ["ratón", "mono", "serpiente"], respuestaCorrecta: "mono" },
    { pregunta: "¿Cuál de estos es un tipo de comida?", opciones: ["pizza", "lápiz", "zapato"], respuestaCorrecta: "pizza" },
    { pregunta: "¿Qué fruta es amarilla y se pela?", opciones: ["uva", "uva", "plátano"], respuestaCorrecta: "plátano" },
    { pregunta: "¿Qué usamos para correr?", opciones: ["piernas", "manos", "ojos"], respuestaCorrecta: "piernas" },
    { pregunta: "¿Qué animal es conocido por su gran fuerza?", opciones: ["león", "ratón", "pájaro"], respuestaCorrecta: "león" },
    { pregunta: "¿Qué parte del cuerpo usamos para abrazar?", opciones: ["piernas", "brazos", "pies"], respuestaCorrecta: "brazos" },
    { pregunta: "¿Qué animal vive en una cueva?", opciones: ["murciélago", "pez", "caballo"], respuestaCorrecta: "murciélago" },
    { pregunta: "¿Qué usamos para encender una luz?", opciones: ["silla", "interruptor", "carpeta"], respuestaCorrecta: "interruptor" },
    { pregunta: "¿Cuál de estos es un insecto que vuela?", opciones: ["libélula", "perro", "gato"], respuestaCorrecta: "libélula" },
    { pregunta: "¿Qué bebida es caliente y se toma en la mañana?", opciones: ["jugo", "café", "agua"], respuestaCorrecta: "café" },
    { pregunta: "¿Qué fruta es verde por fuera y roja por dentro?", opciones: ["sandía", "limón", "kiwi"], respuestaCorrecta: "sandía" },
    { pregunta: "¿Cuál es un lugar donde hay muchos libros?", opciones: ["parque", "biblioteca", "escuela"], respuestaCorrecta: "biblioteca" },
    { pregunta: "¿Qué usamos para medir el tiempo?", opciones: ["mesa", "reloj", "mesa"], respuestaCorrecta: "reloj" },
    { pregunta: "¿Cuál de estos es un insecto que hace miel?", opciones: ["saltamontes", "escorpión", "abeja"], respuestaCorrecta: "abeja" },
    { pregunta: "¿Qué hacemos cuando tenemos frío?", opciones: ["ponernos suéter", "saltamos", "bailamos"], respuestaCorrecta: "ponernos suéter" },
    { pregunta: "¿Qué usamos para tomar agua?", opciones: ["mesa", "vaso", "silla"], respuestaCorrecta: "vaso" },
    { pregunta: "¿Qué sonido hace un pato?", opciones: ["cuac", "miau", "guau"], respuestaCorrecta: "cuac" },
    { pregunta: "¿Qué animal vive en el desierto?", opciones: ["tortuga", "pez", "camello"], respuestaCorrecta: "camello" },
    { pregunta: "¿Cuál de estos es un insecto?", opciones: ["loro", "perro", "araña"], respuestaCorrecta: "araña" },
    { pregunta: "¿Qué usamos para comer sopa?", opciones: ["plato", "cuchara", "tenedor"], respuestaCorrecta: "cuchara" },
    { pregunta: "¿Cuál es un lugar donde jugamos con arena?", opciones: ["playa", "sala", "cocina"], respuestaCorrecta: "playa" },
    { pregunta: "¿Qué fruta crece en un árbol?", opciones: ["papa", "zanahoria", "pera"], respuestaCorrecta: "pera" },
    { pregunta: "¿Qué parte del cuerpo usamos para hablar?", opciones: ["boca", "cabeza", "ojos"], respuestaCorrecta: "boca" }
];

// Frases para completar parte 2 
const frasesParaCompletar = [
    { frase: "La ______ es roja y tiene semillas.", respuesta: "manzana" },
    { frase: "El ______ es amarillo y largo.", respuesta: "plátano" },
    { frase: "El ______ es un animal que hace 'guau'.", respuesta: "perro" },
    { frase: "El ______ es amarillo y nos da luz.", respuesta: "sol" },
    { frase: "La ______ es un dulce que se come.", respuesta: "paleta" },
    { frase: "El ______ es verde y se usa para la ensalada.", respuesta: "pepino" },
    { frase: "El ______ es un pájaro pequeño.", respuesta: "gorrión" },
    { frase: "El ______ es una fruta verde.", respuesta: "limón" },
    { frase: "La ______ es blanca y se bebe.", respuesta: "leche" },
    { frase: "La ______ es marrón y tiene caparazón.", respuesta: "tortuga" },
    { frase: "El ______ es redondo y tiene una clara y una yema.", respuesta: "huevo" },
    { frase: "La ______ es de colores y vuela en el cielo.", respuesta: "mariposa" },
    { frase: "La ______ es de color naranja y se convierte en jugo.", respuesta: "naranja" },
    { frase: "El ______ es un lugar donde viven muchos peces.", respuesta: "océano" },
    { frase: "El ______ es una bebida caliente que nos calienta.", respuesta: "chocolate" },
    { frase: "La ______ es un vegetal que es naranja y crujiente.", respuesta: "zanahoria" },
    { frase: "El ______ es un juguete que se hace volar.", respuesta: "barrilete" },
    { frase: "El ______ es un dulce que se mastica.", respuesta: "chicle" },
    { frase: "La ______ es pequeña de color verde y salta muy alto.", respuesta: "rana" },
    { frase: "La ______ es redonda y se usa para jugar en la playa.", respuesta: "pelota" },
    { frase: "La ______ es una fruta roja que crece en los árboles.", respuesta: "cereza" },
    { frase: "La ______ es un insecto que tiene muchas patas.", respuesta: "araña" },
    { frase: "La ______ es dulce y se usa para hacer pasteles la crean las abejas.", respuesta: "miel" },
    { frase: "El ______ es un tipo de ave que no puede volar.", respuesta: "pingüino" },
    { frase: "La ______ es una planta que crece en el campo y es muy colorida.", respuesta: "flor" },
    { frase: "El ______ es un juguete que gira y puede ser de madera o plástico.", respuesta: "trompo" },
    { frase: "La ______ es una bebida fría hecha de limón.", respuesta: "limonada" },
    { frase: "La ______ es un animal que vive en la granja y da leche.", respuesta: "vaca" },
    { frase: "Los ______ son una botana que se come en el cine.", respuesta: "poporopos" },
    { frase: "El ______ es un tipo de vehículo que vuela en el aire.", respuesta: "avión" },
    { frase: "El ______ es un animal que lleva una casa en su espalda.", respuesta: "caracol" },
    { frase: "La ______ es un aparato que nos muestra imágenes en la pantalla.", respuesta: "televisión" },
    { frase: "El ______ es un líquido que viene de los árboles y es dulce.", respuesta: "jarabe" },
    { frase: "El ______ es un juguete que se usa en la nieve para deslizarse.", respuesta: "trineo" },
    { frase: "El ______ es un animal que salta y tiene patas largas y tiene una bolsa en su pecho.", respuesta: "canguro" },
    { frase: "La ______ es un postre frío que viene en muchos sabores.", respuesta: "gelatina" },
    { frase: "El ______ es un juguete que gira por medio de una cuerda en medio de él.", respuesta: "yoyo" },
    { frase: "El ______ es un animal que vive en el bosque y tiene orejas grandes.", respuesta: "conejo" },
    { frase: "La ______ es un dulce que viene en un palo y es muy colorido.", respuesta: "paleta" },
    { frase: "El ______ es un aparato que se usa para escuchar música.", respuesta: "radio" },
    { frase: "La ______ es un lugar donde hay muchos animales salvajes.", respuesta: "selva" },
    { frase: "Las ______ es un juego que se juega con cartas y es divertido.", respuesta: "cartas" },
    { frase: "El ______ es un animal que vive en el agua y tiene una larga trompa.", respuesta: "hipopótamo" },
    { frase: "La ______ es un animal que vive en la granja y pone huevos.", respuesta: "gallina" },
    { frase: "El ______ es un tipo de pájaro que es muy colorido y canta.", respuesta: "canario" },
    { frase: "La ______ es un utensilio que usamos para comer sopa.", respuesta: "cuchara" },
    { frase: "El ______ es un lugar donde hay muchas flores y árboles.", respuesta: "jardín" },
    { frase: "El ______ es un animal que vive en la selva y es muy rápido.", respuesta: "guepardo" },
    { frase: "El ______ es un tipo de vehículo que se mueve por el aire y tiene hélices.", respuesta: "helicóptero" },
    { frase: "La ______ es un lugar donde aprendemos y jugamos con otros niños.", respuesta: "escuela" },
    { frase: "El ______ es un mamífero que vive en el agua y tiene dientes grandes.", respuesta: "delfín" },
    { frase: "El ______ es un alimento que se hace con harina y se hornea.", respuesta: "pan" },
    { frase: "El ______ es un juego que hacemos en un tablero con piezas.", respuesta: "ajedrez" },
    { frase: "La ______ es un insecto que tiene un cuerpo brillante y hace ruido en las noches.", respuesta: "cigarra" },
    { frase: "El ______ es una bebida que se hace con frutas y se licua.", respuesta: "licuado" },
    { frase: "El ______ es un lugar donde podemos ver muchos peces de colores.", respuesta: "acuario" },
    { frase: "El ______ es un pequeño mamífero que vive en la selva y tiene una cola larga.", respuesta: "mono" },
    { frase: "El ______ es una flor que tiene el centro de color café y tiene petalos amarillos.", respuesta: "girasol" }

];

//oraciones parte 3
const oracionesParte3 = [
    { oracion: "El gato dice ______.", respuesta: "miau" },
    { oracion: "La manzana es ______.", respuesta: "roja" },
    { oracion: "El agua es ______.", respuesta: "transparente" },
    { oracion: "La nieve es ______.", respuesta: "fría" },
    { oracion: "El tren es ______.", respuesta: "largo" },
    { oracion: "El árbol tiene ______.", respuesta: "hojas" },
    { oracion: "La luna es ______.", respuesta: "redonda" },
    { oracion: "El pasto es ______.", respuesta: "verde" },
    { oracion: "El fuego es ______.", respuesta: "caliente" },
    { oracion: "El león es ______.", respuesta: "fuerte" },
    { oracion: "El perro dice ______.", respuesta: "guau" },
    { oracion: "El cielo es ______.", respuesta: "azul" },
    { oracion: "La flor es ______.", respuesta: "hermosa" },
    { oracion: "El sol es ______.", respuesta: "brillante" },
    { oracion: "La vaca dice ______.", respuesta: "muu" },
    { oracion: "El pez es ______.", respuesta: "colorido" },
    { oracion: "El invierno es ______.", respuesta: "frío" },
    { oracion: "El carro es ______.", respuesta: "rápido" },
    { oracion: "El búho es ______.", respuesta: "sabio" },
    { oracion: "La casa es ______.", respuesta: "grande" },
    { oracion: "El chicle es ______.", respuesta: "dulce" },
    { oracion: "El ratón es ______.", respuesta: "pequeño" },
    { oracion: "La arena es ______.", respuesta: "suave" },
    { oracion: "El circo es ______.", respuesta: "divertido" },
    { oracion: "El helado es ______.", respuesta: "refrescante" },
    { oracion: "La tortuga es ______.", respuesta: "lenta" },
    { oracion: "La serpiente es ______.", respuesta: "larga" },
    { oracion: "El caracol es ______.", respuesta: "lento" },
    { oracion: "El búfalo es ______.", respuesta: "enorme" },
    { oracion: "La estrella es ______.", respuesta: "amarilla" },
    { oracion: "El pato dice ______.", respuesta: "cuac" },
    { oracion: "El canguro ______.", respuesta: "salta" },
    { oracion: "La muñeca es ______.", respuesta: "bonita" },
    { oracion: "El oro es ______.", respuesta: "valioso" },
    { oracion: "El sombrero es ______.", respuesta: "blanco" },
    { oracion: "La mariposa es ______.", respuesta: "colorida" },
    { oracion: "El murciélago ______.", respuesta: "negro" },
    { oracion: "El pez nada en el ______.", respuesta: "agua" },
    { oracion: "El tambor hace ______.", respuesta: "ruido" }
];
// Palabras para arrastrar y soltar
const palabrasArrastrar = ["divertido", "dulce", "pequeño", "suave", "lenta", "larga","grande","frío","lento","enorme","gato", "miau", "roja", "transparente", "fría",
     "largo", "hojas", "redonda", "verde", "caliente", "fuerte","guau","azul","hermosa", "sabio","brillante", "muu","colorido", "refrescante","rápido",
"negro", "agua", "ruido","cuac","salta","blanco","colorida","bonita","valioso","amarilla"

];

// Función para seleccionar elementos aleatorios
function seleccionarAleatorios(arr, num) {
    return arr
        .sort(() => Math.random() - 0.5)
        .slice(0, num);
}

// Función para iniciar el examen
function iniciarExamen() {
    // Reiniciar las variables al inicio del examen
    respuestasCorrectas = 0;
    puntuacionTotal = 0;

    cargarPreguntas();
    mostrarParte(1);
}

document.getElementById("verificar-btn").addEventListener("click", function () {
    if (parteActual === 1) {
        validarParte1();
    } else if (parteActual === 2) {
        validarParte2();
    }
});

function cargarPreguntas() {
    const contenedorPreguntas = document.getElementById("preguntas-1");
    preguntasSeleccionadasParte1 = seleccionarAleatorios(preguntasParte1, 20); // Seleccionar preguntas al azar
    contenedorPreguntas.innerHTML = "";

    preguntasSeleccionadasParte1.forEach((item, index) => {
        const div = document.createElement("div");
        div.innerHTML = `<p>${index + 1}. ${item.pregunta}</p>` + // Agregar número a cada inciso 
            item.opciones.map(opcion => `<label><input type="radio" name="pregunta${index}" value="${opcion}"> ${opcion}</label>`).join("");
        contenedorPreguntas.appendChild(div);
    });
}

// En la función validarParte1
function validarParte1() {
    const todasRespondidas = preguntasSeleccionadasParte1.every((item, index) => {
        return document.querySelector(`input[name="pregunta${index}"]:checked`);
    });

    if (!todasRespondidas) {
        mostrarModal("Alerta: Debes responder todas las preguntas antes de continuar.");
        return;
    }

    preguntasSeleccionadasParte1.forEach((item, index) => {
        const respuestaSeleccionada = document.querySelector(`input[name="pregunta${index}"]:checked`);
        if (respuestaSeleccionada) {
            if (respuestaSeleccionada.value === item.respuestaCorrecta) {
                respuestasCorrectas++;
                puntuacionTotal += 1; 
            } else {
                puntuacionTotal -= 1; 
            }
        }
    });

     // Asegurar que la puntuación se mantenga entre 0 y 100
     puntuacionTotal = Math.max(puntuacionTotal, 0);
     puntuacionTotal = Math.min(puntuacionTotal, 100);
    mostrarParte(2);
    cargarFrases();  // Cargar las frases de la segunda parte
}

function cargarFrases() {
    const contenedorFrases = document.getElementById("frases-completar");
    frasesSeleccionadasParte2 = seleccionarAleatorios(frasesParaCompletar, 20); // Seleccionar frases al azar
    contenedorFrases.innerHTML = "";

    frasesSeleccionadasParte2.forEach((item, index) => {
        const div = document.createElement("div");
        div.innerHTML = `<p>${index + 1}. ${item.frase}</p><input type="text" id="completar-${index}" />`; // Agregar número
        contenedorFrases.appendChild(div);
    });
}

function validarParte2() {
    const todasRespondidas = frasesSeleccionadasParte2.every((item, index) => {
        const respuesta = document.getElementById(`completar-${index}`).value.trim();
        return respuesta !== ""; // Verificar que todas las respuestas están completas
    });

    if (!todasRespondidas) {
        mostrarModal("Alerta: Debes llenar todas las frases antes de continuar.");
        return;
    }

    frasesSeleccionadasParte2.forEach((item, index) => {
        const respuesta = document.getElementById(`completar-${index}`).value.trim().toLowerCase();
        
        // Normalizar respuestas para quitar tildes
        const respuestaNormalizada = respuesta.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // Normalizar la respuesta correcta de la frase
        const respuestaCorrectaNormalizada = item.respuesta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (respuesta) {
            if (respuestaNormalizada === respuestaCorrectaNormalizada) {
                respuestasCorrectas++;
                puntuacionTotal += 2; 
            } else {
                puntuacionTotal -= 1; 
            }
        }
    });
     // Asegurar que la puntuación se mantenga entre 0 y 100
     puntuacionTotal = Math.max(puntuacionTotal, 0);
     puntuacionTotal = Math.min(puntuacionTotal, 100);
    mostrarParte(3);
}

// Función para cargar las oraciones de la parte 3
function cargarOracionesArrastrar() {
    const contenedorOraciones = document.getElementById("oraciones-arrastrar");
    oracionesSeleccionadasParte3 = seleccionarAleatorios(oracionesParte3, 20); // Seleccionar oraciones al azar
    contenedorOraciones.innerHTML = "";

    oracionesSeleccionadasParte3.forEach((item, index) => {
        const div = document.createElement("div");
        // Añadir numeración a las oraciones
        div.innerHTML = `<p>${index + 1}. ${item.oracion.replace('______', `<span id="dropzone-${index}" class="dropzone"></span>`)}</p>`;
        contenedorOraciones.appendChild(div);
    
        const dropzone = document.getElementById(`dropzone-${index}`);
        dropzone.addEventListener("dragover", onDragOver);  // Permitir el arrastre sobre la zona
        dropzone.addEventListener("drop", onDrop);          // Permitir soltar en la zona
    });
    
    cargarPalabrasArrastrar(); // Cargar palabras para arrastrar
}

// Función para cargar las palabras arrastrables para la parte 3
function cargarPalabrasArrastrar() {
    const contenedorPalabras = document.getElementById("palabras-arrastrar-3");
    contenedorPalabras.innerHTML = "";

    palabrasArrastrar.forEach((palabra, index) => {
        const palabraElemento = document.createElement("div");
        palabraElemento.textContent = palabra;
        palabraElemento.setAttribute("draggable", "true");
        palabraElemento.id = `palabra-${index}-3`;
        palabraElemento.classList.add("draggable");
        palabraElemento.addEventListener("dragstart", onDragStart);
        contenedorPalabras.appendChild(palabraElemento);
    });
}

function onDragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    event.preventDefault();
    const idPalabra = event.dataTransfer.getData("text");
    const palabraArrastrada = document.getElementById(idPalabra);

    // Añadir la palabra a la zona de soltar
    if (event.target.classList.contains("dropzone") && !event.target.hasChildNodes()) {
        event.target.appendChild(palabraArrastrada);
        palabraArrastrada.setAttribute("draggable", "false");  // Desactivar arrastre después de soltar
    }
}

function validarParte3() {
    const todasRespondidas = oracionesSeleccionadasParte3.every((item, index) => {
        const respuesta = document.getElementById(`dropzone-${index}`).textContent.trim();
        return respuesta !== ""; // Verificar que todas las respuestas están completas
    });

    if (!todasRespondidas) {
        mostrarModal("Alerta: Debes llenar todas las oraciones antes de continuar.");
        return;
    }

    oracionesSeleccionadasParte3.forEach((item, index) => {
        const respuesta = document.getElementById(`dropzone-${index}`).textContent.trim().toLowerCase();
        if (respuesta === item.respuesta.toLowerCase()) {
            respuestasCorrectas++;
            puntuacionTotal += 2; 
        } else {
            puntuacionTotal -= 1; 
        }
    });

     // Asegurar que la puntuación se mantenga entre 0 y 100
     puntuacionTotal = Math.max(puntuacionTotal, 0);
     puntuacionTotal = Math.min(puntuacionTotal, 100);
    mostrarResultadosFinales();
}

document.getElementById("finalizar-btn").addEventListener("click", function () {
    if (parteActual === 3) {
        validarParte3();
    }
});

function mostrarParte(parte) {
    console.log("Mostrando parte:", parte);  
    document.getElementById(`parte-${parteActual}`).style.display = "none";
    
    // Mostrar la nueva parte
    document.getElementById(`parte-${parte}`).style.display = "block";
    parteActual = parte;

    if (parte === 3) {
        cargarOracionesArrastrar(); 
        document.getElementById("verificar-btn").style.display = "none";
        document.getElementById("finalizar-btn").style.display = "block";
    } else {
        document.getElementById("verificar-btn").style.display = "block";
        document.getElementById("finalizar-btn").style.display = "none";
    }
}

function mostrarResultadosFinales() {
    // Verificar si los puntos ya han sido enviados
    if (!puntosEnviados) {
        document.getElementById("resultado-final").textContent = `Has acertado ${respuestasCorrectas} respuestas. Puntuación total: ${puntuacionTotal}`;
        document.getElementById("resultado-final").style.display = "block";

        const mensajeAdicional = "Recuerda que puedes volver a los módulos para mejorar tu conocimiento. Cuando quieras volver hacer el examen completa los modulos del 1 al 3 nuevamente :D Buena suerte";
        mostrarModal(`¡Felicidades, terminaste el examen!\n\n${mensajeAdicional}`);

        enviarPuntos(puntuacionTotal); 
        puntosEnviados = true; 
    } else {
        console.log("Los puntos ya han sido enviados.");
    }

    // Limpiar claves de los modulos en el LocalStorage
    localStorage.removeItem('modulo1Completo');
    localStorage.removeItem('modulo2Completo');
    localStorage.removeItem('modulo3Completo');
}

function mostrarModal(mensaje) {
    document.getElementById("modal-mensaje").textContent = mensaje;
    document.getElementById("modal").style.display = "block";
}

document.getElementById("close-modal").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
});

// Cerrar el modal al hacer clic fuera de él
document.getElementById("modal").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});

// Regresar a la página principal
document.getElementById("regresar-btn").addEventListener("click", function () {
    window.location.href = 'index.php';
});

// Función para enviar puntos al servidor
function enviarPuntos(puntuacion) {
    const modulo = 5; // Número de módulo que corresponda

    fetch('guardar_puntos.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            puntos: puntuacion,
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

// Iniciar el examen al cargar
window.onload = iniciarExamen;
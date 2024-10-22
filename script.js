// Función que se llama al hacer clic en los botones de los módulos
function iniciarActividad(modulo) {
    console.log(`Iniciar actividad del ${modulo}`);
    if (modulo === 3) {
        mostrarSubmodulos();
    } else {
        irAlModulo(modulo);
    }
}

function irAlModulo(modulo) {
    document.getElementById("loading-bar").style.display = "flex"; // Mostrar barra de carga
    setTimeout(() => {
        window.location.href = `bienvenida.html?modulo=${modulo}`;
    }, 1000); // Simular un pequeño retraso para mostrar la barra de carga
}

function mostrarSubmodulos() {
    const submodulePopup = document.getElementById("submodule-popup");
    submodulePopup.style.display = "flex"; // Mostrar la ventana emergente para seleccionar submódulos
}

function cerrarSubmodulePopup() {
    const submodulePopup = document.getElementById("submodule-popup");
    submodulePopup.style.display = "none"; // Ocultar la ventana emergente de submódulos
}

function seleccionarSubmodulo(modulo) {
    cerrarSubmodulePopup();
    irAlModulo(modulo);
}

function mostrarInstrucciones(id) {
    const instrucciones = {
        'instrucciones1': '¡Hola! En este juego, vas a ver en pantalla una imagen, debajo de ella, hay un espacio para escribir la palabra del nombre que pienses que es. Por ejemplo, si ves una imagen de una manzana, escribe la palabra \'manzana\'. ¡Diviértete asociando las imágenes con las palabras correctas!',
        'instrucciones2': '¡Hola! En este juego, verás una oración que está incompleta. Tu trabajo es completar la oración seleccionando la palabra correcta que falta. Por ejemplo, si ves \'El gato está en el ______\', debes seleccionar \'techo\' si es la respuesta correcta. ¡Es como un rompecabezas de palabras, y tú eres el héroe que lo completa!',
        'instrucciones3': '¡Hola! En este juego, verás una palabra en la pantalla. El objetivo es que repitas 3 veces la palabra , por ejemplo, \'pelota, pelota, pelota\'. Tu tarea es decir la palabra en voz alta. Dandole clic el botón escuchar podras oir la palabra ¡Es un divertido juego de repetición para practicar cómo se pronuncian las palabras!'
    };

    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');

    popupText.textContent = instrucciones[id];
    popup.style.display = 'flex'; // Mostrar el popup
}

function cerrarPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Ocultar el popup
}

function salir() {
    // Función para el botón de salir 
}

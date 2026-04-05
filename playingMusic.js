const btn = document.getElementById("playBtn");
const music = document.getElementById("bgMusic");
const changeText = document.querySelector(".change-text");

const textToChange = [
    "¡Espero que disfrutes la música y tengas un día increíble!",
    "¡Feliz cumpleaños, Tiara!", 
    "No soy bueno con las palabras, pero espero que este detalle te guste :D",
    "Espero que nos sigamos conociendo y compartiendo momentos juntos.😭"
];

btn.addEventListener("click", () => {
    music.play();
    music.loop = true;
    btn.style.display = "none"; // ocultar botón después de iniciar
    changeTextContent(); // iniciar el cambio de texto
});

function changeTextContent() {
    let i = 0;
    setInterval(() => {
        i++;
        if (i >= textToChange.length) {
            i = 0; // reiniciar el índice para repetir los mensajes
        }
        changeText.textContent = textToChange[i];
    }, 3000); // 3 segundos
}


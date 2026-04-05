import confetti from 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/+esm';

const btn = document.getElementById("playBtn");
const music = document.getElementById("bgMusic");
const changeText = document.querySelector(".change-text");
const offBtn = document.getElementById("offBtn");

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
    offBtn.style.display = "inline-block"; // mostrar botón de detener
});

offBtn.addEventListener("click", () => {
    music.pause();
    music.currentTime = 0; // reiniciar la música al principio
    btn.style.display = "inline-block"; // mostrar botón de iniciar
    changeTextContent(); // reiniciar el cambio de texto
    offBtn.style.display = "none"; // ocultar botón de detener
});

function changeTextContent() {
    let i = 0;
    setInterval(() => {
        i++;
        if (i >= textToChange.length) {
            i = 0; // reiniciar el índice para repetir los mensajes
        }
        changeText.textContent = textToChange[i];
        if (i === textToChange.length - 1) {
            lanzarConfeti();
        }
    }, 3000); 
}

function lanzarConfeti() {
    confetti({
        particleCount: 150, // Cantidad de papelitos
        spread: 80,         // Qué tan amplio será el estallido
        origin: { y: 0.6 }, // Desde dónde sale (0.6 es un poco más abajo de la mitad de la pantalla)
        colors: ['#e17eb9', '#6c2abb', '#ffffff'] // Usamos los colores de tu diseño CSS
    });
}
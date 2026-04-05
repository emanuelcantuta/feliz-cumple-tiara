import confetti from 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/+esm';

const btn = document.getElementById("playBtn");
const music = document.getElementById("bgMusic");
const changeText = document.querySelector(".change-text");
const offBtn = document.getElementById("offBtn");
const lyricsDisplay = document.getElementById("lyricsDisplay"); // Seleccionamos la pantalla de letras
const restartBtn = document.getElementById("restartBtn"); // Botón para reiniciar la canción

const textToChange = [
    "¡Espero que disfrutes la música y tengas un día increíble!",
    "¡Feliz cumpleaños, Tiara!", 
    "No soy bueno con las palabras, pero espero que este detalle te guste :D",
    "Espero que nos sigamos conociendo y compartiendo momentos juntos.😭"
];

// Mapa de tiempos (en segundos) y la letra correspondiente.
const lyricsData = [
    { time: 0, text: "" }, // Silencio al principio
    { time: 15, text: "Here comes the sun, doo-doo-doo-doo" },
    { time: 19, text: "Here comes the sun, and I say" },
    { time: 22, text: "It's alright" },
    { time: 25, text: "🎵 (Instrumental) 🎵" },
    { time: 32, text: "Little darlin', it's been a long, cold, lonely winter" },
    { time: 40, text: "Little darlin', it feels like years since it's been here" },
    { time: 46, text: "Here comes the sun, doo-doo-doo-doo" },
    { time: 50, text: "Here comes the sun, and I say" },
    { time: 53, text: "It's alright" },
    { time: 57, text: "🎵 (Instrumental) 🎵" },
    { time: 62, text: "Little darlin', the smile's returning to their faces" },
    { time: 70, text: "Little darlin', it seems like years since it's been here" },
    { time: 77, text: "Here comes the sun" },
    { time: 81, text: "Here comes the sun, and I say" },
    { time: 84, text: "It's alright" },
    { time: 88, text: "🎵 (Instrumental) 🎵" },
    { time: 92, text: "Sun, sun, sun, here it comes" },
    { time: 99, text: "Sun, sun, sun, here it comes" },
    { time: 105, text: "Sun, sun, sun, here it comes" },
    { time: 112, text: "Sun, sun, sun, here it comes" },
    { time: 118, text: "Sun, sun, sun, here it comes" },
    { time: 125, text: "Little darlin', I feel that ice is slowly melting" },
    { time: 133, text: "Little darlin', it seems like years since it's been clear" },
    { time: 140, text: "Here comes the sun, doo-doo-doo-doo" },
    { time: 144, text: "Here comes the sun, and I say" },
    { time: 147, text: "It's alright" },
    { time: 154, text: "Here comes the sun, doo-doo-doo-doo" },
    { time: 158, text: "Here comes the sun" },
    { time: 161, text: "It's alright" },
    { time: 165, text: "It's alright" },
    { time: 170, text: "🎵" }
];

let intervalId; 
let textoIniciado = false; 

// Evento: Iniciar o reanudar
btn.addEventListener("click", () => {
    music.play();
    music.loop = true;
    
    btn.style.display = "none"; 
    offBtn.style.display = "inline-block"; 
    
    if (!textoIniciado) {
        iniciarCambioDeTexto(); 
        textoIniciado = true; 
    }
});

// Evento: Apagar música
offBtn.addEventListener("click", () => {
    music.pause();
    
    btn.style.display = "inline-block"; 
    offBtn.style.display = "none"; 
});

// NUEVO: Escuchar el tiempo de la canción en vivo
music.addEventListener("timeupdate", () => {
    const currentTime = music.currentTime; // Obtiene el segundo actual exacto
    
    // Buscamos qué frase debería mostrarse en este segundo
    let currentLyric = "";
    for (let i = 0; i < lyricsData.length; i++) {
        // Si el tiempo de la canción pasó el tiempo de esta letra, la seleccionamos
        if (currentTime >= lyricsData[i].time) {
            currentLyric = lyricsData[i].text;
        } else {
            // Como están en orden, si el tiempo no alcanzó la siguiente, paramos de buscar
            break; 
        }
    }
    
    // Solo actualizamos el texto si cambió (para ahorrar recursos de la compu)
    if (lyricsDisplay.textContent !== currentLyric) {
        lyricsDisplay.textContent = currentLyric;
    }
});

restartBtn.addEventListener("click", () => {
    music.currentTime = 0;
    if (music.paused) {
        music.play();
    }
});

function iniciarCambioDeTexto() {
    let i = -1; 
    
    intervalId = setInterval(() => {
        changeText.classList.add("fade-out");
        
        setTimeout(() => {
            i++;
            if (i >= textToChange.length) {
                i = 0; 
            }
            
            changeText.textContent = textToChange[i];
            changeText.classList.remove("fade-out");
            
            if (i === textToChange.length - 1) {
                lanzarConfeti();
            }
        }, 500); 
        
    }, 3500); 
}

function lanzarConfeti() {
    confetti({
        particleCount: 150, 
        spread: 80,         
        origin: { y: 0.6 }, 
        colors: ['#e17eb9', '#6c2abb', '#ffffff'] 
    });
}
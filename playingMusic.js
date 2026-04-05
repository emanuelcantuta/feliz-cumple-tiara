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

let intervalId; 
let textoIniciado = false; 

// Al darle click a INICIAR (o reanudar)
btn.addEventListener("click", () => {
    music.play();
    music.loop = true;
    
    btn.style.display = "none"; 
    offBtn.style.display = "inline-block"; 
    
    if (!textoIniciado) {
        iniciarCambioDeTexto(); 
        textoIniciado = true; // Marcamos que ya empezó
    }
});

// Al darle click a APAGAR
offBtn.addEventListener("click", () => {
    music.pause();
    btn.style.display = "inline-block"; 
    offBtn.style.display = "none"; 
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
        }, 300); 
        
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
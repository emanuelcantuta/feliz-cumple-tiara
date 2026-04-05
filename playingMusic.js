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

// Variable para guardar el reloj y poder detenerlo
let intervalId; 

btn.addEventListener("click", () => {
    music.play();
    music.loop = true;
    btn.style.display = "none"; 
    offBtn.style.display = "inline-block"; 
    iniciarCambioDeTexto(); 
});

offBtn.addEventListener("click", () => {
    music.pause();
    music.currentTime = 0; 
    btn.style.display = "inline-block"; 
    offBtn.style.display = "none"; 
    
    // Detenemos el reloj para que no se duplique
    clearInterval(intervalId);
    
    // Dejamos el texto visible y con el mensaje de bienvenida original
    changeText.classList.remove("fade-out");
    changeText.textContent = "¡Que tengas un bonito cumple tiara:D!";
});

function iniciarCambioDeTexto() {
    let i = -1; // Empezamos en -1 para que el primer cambio sea el índice 0
    
    intervalId = setInterval(() => {
        // 1. Hacemos el texto transparente
        changeText.classList.add("fade-out");
        
        // 2. Esperamos medio segundo (500ms) mientras se hace invisible
        setTimeout(() => {
            i++;
            if (i >= textToChange.length) {
                i = 0; 
            }
            
            // 3. Cambiamos el texto estando invisible
            changeText.textContent = textToChange[i];
            
            // 4. Volvemos a hacer visible el texto
            changeText.classList.remove("fade-out");
            
            // Lanzamos el confeti en la última frase
            if (i === textToChange.length - 1) {
                lanzarConfeti();
            }
        }, 500); 
        
    }, 3500); // Repetimos todo el proceso cada 3.5 segundos
}

function lanzarConfeti() {
    confetti({
        particleCount: 150, 
        spread: 80,         
        origin: { y: 0.6 }, 
        colors: ['#e17eb9', '#6c2abb', '#ffffff'] 
    });
}
const $ = (selector) => document.querySelector(selector);

const game = $("#gameArea");
const img = $("img");
const contador = $(".contador");
const tiempo = $(".tiempo");

img.src = "./images/globo.png";
game.appendChild(img);

const startButton = $("#startButton");
startButton.addEventListener("click", iniciarJuego);

let score = 0;
let timeLeft = 15;
let juegoActivo = false;
let intervaloTiempo;

img.addEventListener("click", () => {  
  if (juegoActivo === false) return; 
  score++;
  contador.textContent = `Contador de globos atrapados: ${score}`;
  moverImagen();
});

function iniciarJuego() {
  if (juegoActivo === true) return; 
  
  juegoActivo = true;
  valuesDefault();
  moverImagen();
  contadorTiempo();
}

function valuesDefault() {
  score = 0;
  timeLeft = 15;

  contador.textContent = `Contador de globos atrapados: ${score}`;
  tiempo.textContent = `Tiempo restante: ${timeLeft}`;
}

function moverImagen() {
  const gameWidth = game.clientWidth;
  const gameHeight = game.clientHeight;
  const imgWidth = img.offsetWidth;
  const imgHeight = img.offsetHeight;

  // Calculamos coordenadas aleatorias dentro del main
  const randomX = Math.floor(Math.random() * (gameWidth - imgWidth));
  const randomY = Math.floor(Math.random() * (gameHeight - imgHeight));

  img.style.left = randomX + "px";
  img.style.top = randomY + "px";
}

function contadorTiempo() {
  clearInterval(intervaloTiempo); 

  intervaloTiempo = setInterval(() => {
    if(timeLeft > 0) {
      timeLeft--;
      tiempo.textContent = `Tiempo restante: ${timeLeft}`;
    } else {
      clearInterval(intervaloTiempo);
      juegoActivo = false;
      
      alert(`¡Tiempo terminado! Atrapaste ${score} globos.`);
      valuesDefault();
    }
  }, 1000);
}
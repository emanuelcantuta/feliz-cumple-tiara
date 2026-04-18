const $ = (selector) => document.querySelector(selector);

const game = $("#gameArea");
const contador = $(".contador");
const tiempo = $(".tiempo");

const  img = document.createElement("img");
img.src = "./images/globo.png";
img.width = 100;


const startButton = $("#startButton");
startButton.addEventListener("click", iniciarJuego);

let score;
let timeLeft;
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
  game.appendChild(img);
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
  intervaloTiempo = setInterval(() => {
    if(timeLeft > 0) {
      timeLeft--;
      tiempo.textContent = `Tiempo restante: ${timeLeft}`;
    } else {
      clearInterval(intervaloTiempo);
      juegoActivo = false;
      img.remove(); 
      setTimeout(() => {
        alert(`¡Tiempo terminado! Atrapaste ${score} globos.`);
      }, 10);
    }
  }, 1000);
}
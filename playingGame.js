const game = document.getElementById("gameArea");
const img = document.querySelector("img");

img.src = "./images/globo.png";
game.appendChild(img);

img.addEventListener("click", moverImagen);

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

setInterval(moverImagen, 3000);

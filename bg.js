const body = document.querySelector("body");
const IMG_NUMBER = 3;

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

function paintImage(imageNumber) {
  const image = new Image();
  image.src = `./images/${imageNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

init();

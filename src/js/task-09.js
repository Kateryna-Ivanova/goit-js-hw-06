function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const body = document.querySelector('body');
const spanColor = document.querySelector('.color');

buttonChangeColor.addEventListener('click', onClickButton)


function onClickButton() {
  const randomColor = getRandomHexColor();
  console.log(randomColor)
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor
}
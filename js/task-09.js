const button = document.querySelector('button.change-color');
const span = document.querySelector('span.color');
const body = document.querySelector('body');

button.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

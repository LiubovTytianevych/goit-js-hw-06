const counterValue = document.querySelector("#value");
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');

let count = 0;

btnIncrement.addEventListener("click", () => {
  count += 1;
  counterValue.textContent = count;
});

btnDecrement.addEventListener("click", () => {
  count -= 1;
  counterValue.textContent = count;
});

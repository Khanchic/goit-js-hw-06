/**
 * Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
    Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
    Обновляй интерфейс новым значением переменной counterValue.
 */

const incBtn = document.querySelector("[data-action=increment]");
const decBtn = document.querySelector("[data-action=decrement]");
const counterValue = document.querySelector("#value");
counterValue.value = 0;
incBtn.addEventListener("click", () => {
  counterValue.value += 1;
  counterValue.textContent = counterValue.value;
});
decBtn.addEventListener("click", () => {
  counterValue.value -= 1;
  counterValue.textContent = counterValue.value;
});

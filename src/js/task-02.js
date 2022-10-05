const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElement = document.querySelector("#ingredients"); // - стучусь к списку

// const newLiElement = document.createElement("li");
// const ingredient = ingredients[0];
// newLiElement.classList.add("item");
// newLiElement.textContent = ingredient;

// ulElement.appendChild(newLiElement);

// console.log(ulElement);

// console.log(newLiElement);

const li = []; // создаю пустой массив в который буду пушить елементы списка

for (let i = 0; i < ingredients.length; i++) {
  // Цыклом перебераю массив.
  const ingredient = ingredients[i];
  const newLiElement = document.createElement("li"); // Создаю елемент
  newLiElement.classList.add("item"); // добавляю класс
  newLiElement.textContent = ingredient; // Добавит название ингредиента как его текстовое содержимое.

  li.push(newLiElement);
}
ulElement.append(...li); // за счет spead добавляю каждый елемент массива как независимый

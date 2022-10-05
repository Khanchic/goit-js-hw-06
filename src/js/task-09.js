function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector("body");
const bntRef = document.querySelector(".change-color");
bntRef.addEventListener("click", onhexColor);
const hexText = document.querySelector(".color");

function onhexColor() {
  const hexColor = getRandomHexColor();
  bodyRef.style.backgroundColor = hexColor;
  hexText.textContent = hexColor;
}

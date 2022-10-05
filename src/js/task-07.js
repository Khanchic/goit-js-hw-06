const inputSize = document.querySelector("#font-size-control");
const textRel = document.querySelector("#text");

inputSize.addEventListener("input", (event) => {
  textRel.style.fontSize = event.currentTarget.value + "px";
});

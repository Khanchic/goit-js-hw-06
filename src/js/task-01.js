const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);
console.log(" ");
for (const category of categories) {
  const cathead = category.querySelector("h2");
  const listItems = category.querySelectorAll("li");
  console.log(`Category: ${cathead.textContent}`);
  console.log(`Elements:${listItems.length}`);
}

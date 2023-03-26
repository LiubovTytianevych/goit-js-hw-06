const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const heading = item.querySelector('h2');
  const elements = item.querySelectorAll('li');
  console.log(`Category: ${heading.textContent}`);
  console.log(`Elements: ${elements.length}`);
});


const searchBar = document.getElementById('searchBar');
const recipeContainer = document.getElementById('recipeContainer');

searchBar.addEventListener('input', () => {
  const searchTerm = searchBar.value.toLowerCase();
  const recipes = recipeContainer.getElementsByClassName('recipe-card');

  Array.from(recipes).forEach(card => {
    const title = card.querySelector('h2').innerText.toLowerCase();
    card.style.display = title.includes(searchTerm) ? '' : 'none';
  });
});

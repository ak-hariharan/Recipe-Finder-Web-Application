const recipeTemplate = document.querySelector('[data-recipe-template]');
const recipeContainer = document.querySelector('[data-recipes-container]');
const searchInput = document.querySelector('[data-search]');

// Recipes array with titles, descriptions, and short descriptions
const recipes = [
  {
    title: 'Mysore Masala Dosa',
    description: 'A crispy dosa filled with spicy potato masala.',
    shortDescription: 'A popular South Indian breakfast item.',
    image: 'images/masala_dosa.png',
  },
  {
    title: 'Idli',
    description: 'Soft, steamed rice cakes served with sambar and chutney.',
    shortDescription: 'Healthy, steamed, and easy to digest.',
    image: 'images/idli.png',
  },
  {
    title: 'Medu Vada',
    description: 'Fried with onion, crispy and delicious.',
    shortDescription: 'A classic crispy South Indian snack.',
    image: 'images/medu_vada.jpg',
  },
  {
    title: 'Chappathi',
    description: 'Flatbread made from wheat flour, soft and healthy.',
    shortDescription: 'An everyday staple in Indian households.',
    image: 'images/chappathi.jpg',
  },
  {
    title: 'Parotta',
    description: 'Layered flatbread fried to perfection.',
    shortDescription: 'A flaky and soft delicacy from Tamil Nadu.',
    image: 'images/parotta.jpg',
  },
];

// Render recipes into the UI
const renderedRecipes = recipes.map((recipe) => {
  const card = recipeTemplate.content.cloneNode(true).children[0];
  const imageElement = card.querySelector('[data-image]')
  const titleElement = card.querySelector('[data-title]');
  const descriptionElement = card.querySelector('[data-description]');
  const shortDescriptionElement = card.querySelector(
    '[data-short-description]'
  );

  imageElement.src = recipe.image;
  titleElement.textContent = recipe.title;
  descriptionElement.textContent = recipe.description;
  shortDescriptionElement.textContent = recipe.shortDescription;

  recipeContainer.append(card);
  return { ...recipe, element: card };
});

// Search functionality
searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  renderedRecipes.forEach((recipe) => {
    const isVisible =
      recipe.title.toLowerCase().includes(value) ||
      recipe.description.toLowerCase().includes(value) ||
      recipe.shortDescription.toLowerCase().includes(value);
    recipe.element.classList.toggle('hide', !isVisible);
  });
});

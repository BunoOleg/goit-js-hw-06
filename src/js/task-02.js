const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector('[id="ingredients"]');

const makeIngredientsList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = ingredient;

    return liEl;
  });
};

const elements = makeIngredientsList(ingredients);

ingredientsListEl.append(...elements);

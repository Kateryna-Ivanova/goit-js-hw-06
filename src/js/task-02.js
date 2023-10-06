const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulIngredients = document.querySelector('#ingredients')
console.dir(ulIngredients)

const creationLiIngredient = ingredients => {
  return ingredients.map(ingredient => { 

    const liIngredient = document.createElement('li');
    liIngredient.textContent = ingredient;
    liIngredient.classList.add('item');
    return liIngredient
  } )
}
const ingredientsAreListed = creationLiIngredient(ingredients)
console.dir(ingredientsAreListed)
ulIngredients.append(...ingredientsAreListed)




import { recipes } from './data.js';

function DisplayRecipe({recipe}) {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map(ing => (<li key={recipe.id + ing}>{ing}</li>))}
      </ul>
    </div>
  );
}

function DisplayRecipes({recipes}) {
  return (
    recipes.map((recipe) => (
      <DisplayRecipe recipe={recipe} key={recipe.id}/>
    ))
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <DisplayRecipes recipes={recipes}/>
    </div>
  );
}

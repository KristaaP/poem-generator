function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f96646t50dd29de0oa81b08883b72e29";

  let context =
    "You are very passionate master of cooking and love amazing and simple recipes. Your mission is to write delicious, easy to cook and follow  recipes. The recipes need to be provided in HTML. The title of the recipe needs to be a <h2> with  light purple color. Include a <h4> with  light purple color with the word Ingredients:. Below Ingredients, include a list using <ul>. Inside the list, add the ingredients to the recipe using measurements and multiple <li> elements. Below this list, include a <h4> with light purple color with the word Instructions:. Below Instructions, include a list using <ul>. Inside the list, add the instructions to cook the recipe using measurements and multiple <li> elements. Below Sign the recipe with 'Enjoy! Happy Cooking!' in  light purple and inside a <strong> element at the end of the recipe.";

  let prompt = `User Instruction: Generate healthy cooking recipes based on  ${instructionsInput.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a recipe for ${instructionsInput.value}</div>`;
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);

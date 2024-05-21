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
  let apiKey = " f96646t50dd29de0oa81b08883b72e29";

  let context =
    "You are a healthy recipe maker and love to write healthy recipes. Your mission is to generate a simple recipe in basic HMTL and seperate each line with a <br/>. Make sure to follow the user instructions. Include a title to the recipe. Sign therecipe with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning ";
  let prompt = ` User instructions: Generate a healthy recipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a recipe for ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);

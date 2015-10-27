var axios          = require('axios');
module.exports = {


fetchRecipes: function(req, res){

  var foodItem = req.params.foodItem;
  var apiKey = '6bdf1a878fa347cdf262b7f9b30714c7';
  var urlKey = 'http://food2fork.com/api/search?key=';
  var searchField = '&q=' + foodItem;

  axios.get(urlKey + apiKey + searchField)
  .then(function (response) {
    res.json(response.data.recipes);
    console.log(response.data.recipes);
  })
  .catch(function (response) {
    console.log(response);
  });
},

fetchIngredients: function(req, res){

  var recipeId = req.params.recipeId;
  var apiKey = '6bdf1a878fa347cdf262b7f9b30714c7';
  var urlKey2 = 'http://food2fork.com/api/get?key=';
  var IdField = '&rId=' + recipeId;

  axios.get(urlKey2 + apiKey + IdField)
  .then(function (response) {
    console.log(response.data.recipe.ingredients);
    // res.json(response.data.recipes);
    // console.log(response.data.recipes);
  })
  .catch(function (response) {
    console.log(response);
  });
}


}
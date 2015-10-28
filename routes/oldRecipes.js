var axios          = require('axios');

module.exports = {

  // fetchIngredients: function(Id, req, res){

  //   var recipeId = Id;
  //   var apiKey = '6bdf1a878fa347cdf262b7f9b30714c7';
  //   var urlKey2 = 'http://food2fork.com/api/get?key=';
  //   var IdField = '&rId=' + recipeId;

  //   axios.get(urlKey2 + apiKey + IdField)
  //   .then(function (response) {
  //     // res.json(response.data.recipes);
  //     console.log(response.data.recipes);
  //   })
  //   .catch(function (response) {
  //     console.log(response);
  //   });
  // },

  fetchRecipes: function(req, res){

    var foodItem = req.params.foodItem;
    var apiKey = '6bdf1a878fa347cdf262b7f9b30714c7';
    var urlKey = 'http://food2fork.com/api/search?key=';
    var searchField = '&q=' + foodItem;

    axios.get(urlKey + apiKey + searchField)

    .then(function (response) {

      var itemId = [];

      var foodArray = response.data.recipes;

        foodArray.forEach(function(item){
          var recipeId = item.Id;
          var apiKey = '6bdf1a878fa347cdf262b7f9b30714c7';
          var urlKey2 = 'http://food2fork.com/api/get?key=';
          var IdField = '&rId=' + recipeId;

          axios.get(urlKey2 + apiKey + IdField)
          .then(function (response) {
            // res.json(response.data.recipes);
            console.log(response.data);
          })
          .catch(function (response) {
            console.log(response);
          });
        });


      })

    .catch(function (response) {
      console.log(response);
    });
  }

}
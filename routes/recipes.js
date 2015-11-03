 var axios          = require('axios');
 
 function fetchRecipes(req, res){
 
    var foodItem = req.params.foodItem;
    var apiKey = '6bdf1a878fa347cdf262b7f9b30714c7';
    var urlKey = 'http://food2fork.com/api/search?key=';
    var searchField = '&q=' + foodItem;
    var count = '&count=6';
 
   axios.get(urlKey + apiKey + searchField + count)
   .then(function (response) {
     res.json(response.data.recipes);
     console.log(response.data.recipes);
   })
   .catch(function (response) {
     console.log(response);
   });
 }
 module.exports = fetchRecipes;

 
 ////////////////////////////////////////////////////////////


 // function fetchIngredients( ID, req, res){
 
 //    var foodItem = req.params.foodId;
 //    var apiKey = '6bdf1a878fa347cdf262b7f9b30714c7';
 //    var urlKey = 'http://food2fork.com/api/get?key=';
 //    var searchField = '&rId=' + foodId;
    
 
 //   axios.get(urlKey + apiKey + searchField)
 //   .then(function (response) {
 //     res.json(response.data.recipes);
 //     console.log(response.data.recipes);
 //   })
 //   .catch(function (response) {
 //     console.log(response);
 //   });
 // }
 // module.exports = fetchIngredients;
 var axios          = require('axios');
 module.exports = { 
 
fetchRecipes: function(req, res){
 
    var foodItem = req.params.foodItem;
    var apiKey = '6bdf1a878fa347cdf262b7f9b30714c7';
    var urlKey = 'http://food2fork.com/api/search?key=';
    var searchField = '&q=' + foodItem;
    var count = '&count=5';
 
   axios.get(urlKey + apiKey + searchField + count)
   .then(function (response) {
     res.json(response.data.recipes);
     console.log(response.data.recipes);
   })
   .catch(function (response) {
     console.log(response);
   });
 },

 
 ////////////////////////////////////////////////////////////


 fetchRecipe: function( rId, req, res) {
    var apiKey = '6bdf1a878fa347cdf262b7f9b30714c7';
    var urlKey = 'http://food2fork.com/api/get?key=';
    var searchField = '&rId=' + rId;
    
 
   axios.get(urlKey + apiKey + searchField)
   .then(function (response) {
    // console.log(response);
     // res.json(response.data.recipes);
     // console.log(response.data.recipes);
   })
   .catch(function (response) {
     console.log(response);
   });
 }
}
 // module.exports = fetchRecipe;
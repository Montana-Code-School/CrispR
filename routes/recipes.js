var axios          = require('axios');

function fetchRecipes(){

  var apiKey = '6bdf1a878fa347cdf262b7f9b30714c7';
  var urlKey = 'http://food2fork.com/api/search?key=';
  var searchField = '&q=shredded%20chicken';

  axios.get(urlKey + apiKey + searchField)
  .then(function (response) {
    console.log(response.data.recipes);
  })
  .catch(function (response) {
    console.log(response);
  });
}

module.exports = fetchRecipes;
var express        = require('express');
var app            = express();
var path           = require('path');
var bodyParser     = require('body-parser');
var router         = express.Router();
var axios          = require('axios');

// routes

var recipeRoutes   = require('./routes/recipes')


// app.use('/', express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile('index.html');
});




// function fetchRecipes(){

//   var apiKey = '6bdf1a878fa347cdf262b7f9b30714c7';
//   var urlKey = 'http://food2fork.com/api/search?key=';
//   var searchField = '&q=shredded%20chicken';

//   axios.get(urlKey + apiKey + searchField)
//   .then(function (response) {
//     console.log(response.data.recipes);
//   })
//   .catch(function (response) {
//     console.log(response);
//   });
// }



app.set('port', process.env.PORT || 4000);

var server = app.listen(app.get('port'), function(){ 
	console.log('Express server listening on port ' + server.address().port)
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


router.get('/', function(req, res) {
   res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);
app.use('/api/recipes', recipeRoutes);





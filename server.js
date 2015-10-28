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


app.set('port', process.env.PORT || 4000);

var server = app.listen(app.get('port'), function(){ 
	console.log('Express server listening on port ' + server.address().port)
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/api', router);

app.use('/api/recipes/:foodItem', recipeRoutes);
// app.use('/api/ingredients/:recipeId', recipeRoutes.fetchIngredients);





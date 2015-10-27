var express     = require('express');
var app         = express();
var path        = require('path');
var bodyParser  = require('body-parser');
var router      = express.Router();
var axios       = require('axios');


// app.use('/', express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));


app.get('/', function(req, res){
    res.sendFile('index.html');
});
app.get('/', function(req, res){
  res.readFile('index.html')
});

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
app.use('/api/recipes', fetchRecipes);




axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  });



var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();



app.use('/', express.static(path.join(__dirname, 'public')));


// app.get('/', function(req, res){
//     res.sendFile('index.html');
// })

app.set('port', process.env.PORT || 4000);

var server = app.listen(app.get('port'), function(){ 
	console.log('Express server listening on port ' + server.address().port)
});

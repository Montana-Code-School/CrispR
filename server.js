// *******************************  Require Concepts Block **************** \\

<<<<<<< HEAD
var express        = require('express');
var app            = express();
var path           = require('path');

var bodyParser     = require('body-parser');
var axios          = require('axios');
var mongoose 	   = require('mongoose');
var passport 	   = require('passport');
var flash    	   = require('connect-flash');
var morgan         = require('morgan');
var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');
var session        = require('express-session');

var db             = require('./models/db');
var blogModel      = require('./models/user');
var router         = express.Router();
var Vendor 		   = require('./models/vendor')


var vendorRoutes   = require('./routes/vendor')
var recipeRoutes   = require('./routes/recipes')
=======
var express        = require('express'), 
app            = express(),
path           = require('path'),

bodyParser     = require('body-parser'),
axios          = require('axios'),
mongoose 	   = require('mongoose'),
passport 	   = require('passport'),
flash    	   = require('connect-flash'),
morgan         = require('morgan'),
cookieParser   = require('cookie-parser'),
bodyParser     = require('body-parser'),
session        = require('express-session'),

db             = require('./models/db'),
blogModel      = require('./models/user'),
router         = express.Router(),
Vendor 		   = require('./models/vendor'),

vendorRoutes   = require('./routes/vendor'),
recipeRoutes   = require('./routes/recipes')

>>>>>>> df3d99fcf8d88e69cbea4b014c1e8bd99f87060a


require('./config/passport')(passport); 

// *******************************  Concepts block end **************** \\

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// mongoose.connect('mongodb://localhost/Crispr'); 



app.set('port', process.env.PORT || 4000);

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


require('./routes/userRoutes')(app, passport); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var server = app.listen(app.get('port'), function(){ 
	console.log('Express server listening on port ' + server.address().port)
});

app.use('/api', vendorRoutes);

app.use('/api', router);

app.use('/api/recipes/:foodItem', recipeRoutes);
// app.use('/api/ingredients/:recipeId', recipeRoutes.fetchIngredients);





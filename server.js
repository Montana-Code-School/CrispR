var express        = require('express');
var app            = express();
var path           = require('path');
var bodyParser     = require('body-parser');
var router         = express.Router();
var axios          = require('axios');
var mongoose 	   = require('mongoose');
var passport 	   = require('passport');
var flash    	   = require('connect-flash');
var morgan         = require('morgan');
var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');
var session        = require('express-session');

// routes

var recipeRoutes   = require('./routes/recipes')


app.use('/', express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



app.set('port', process.env.PORT || 4000);
require('./config/passport')(passport); // pass passport for configuration
//////////////////////////////////////////////////////////////////////////
// set up our express application
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

// routes ======================================================================
require('./routes/userRoutes.js')(app, passport); // load routes & pass in app & fully configed passport

////////////////////////////////////////////////////////////////////////////

var server = app.listen(app.get('port'), function(){ 
	console.log('Express server listening on port ' + server.address().port)
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/api', router);

app.use('/api/recipes/:foodItem', recipeRoutes);
// app.use('/api/ingredients/:recipeId', recipeRoutes.fetchIngredients);





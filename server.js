// *******************************  Require Concepts Block **************** \\

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





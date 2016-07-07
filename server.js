// homework directions
// 1. Revisit the HotResturant application from week 13
// https://github.com/UCF-Coding-Boot-Camp/03-16-Class-Content/tree/master/0329-tth-class-content/13-node-express/13.3/Activities/01-HotRestaurant

// 2. Update `app/public/tables.html` to instead leverage Handlebars

// 3. You will need to `npm install --save express-handlebars`

// 4. You will need to `npm install --save handlebars`

// 5. This file should no longer make an AJAX request for data table and waitlist data. It should instead be rendered dynamically using a handlebars template.



// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server 
// ==============================================================================

var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 8080; // Sets an initial port. We'll use this later in our listener

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var tables = require('./app/data/table-data.js');

//require handlebars
var hbs = require('express-handlebars');

//engine hbs, creates default view
app.engine('handlebars', hbs({defaultLayout: 'main'}));
//sets hbs as method to alter the view
app.set('view engine', 'handlebars');





// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================

// require('./app/routing/api-routes.js')(app); 
// require('./app/routing/html-routes.js')(app);

//hbs routes

app.get('/tables', function(req,res) {
    res.render('index', tableArray);
});

app.get('/reserve', function(req,res) {
    res.render('index', waitingArray);
});






// ==============================================================================
// LISTENER
// The below code effectively "starts" our server 
// ==============================================================================

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
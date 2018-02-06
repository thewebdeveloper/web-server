var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware');

// application level middleware
app.use(middleware.logger);

// route level middleware
app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us');
});

// setting the static folder
app.use(express.static(__dirname + '/public'))

app.listen(PORT, function() {
	console.log('Server started at port' + PORT);
});
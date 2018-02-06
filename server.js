var express = require('express');
var app = express();
var PORT = 3000;


var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('private route hit');
		next();
	},
	logger: function(req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' +req.originalUrl);
		next();
	}
};


// application level authentication
app.use(middleware.logger);


// route level authentication
app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us');
});


app.use(express.static(__dirname + '/public'))

app.listen(PORT, function() {
	console.log('Server started at port' + PORT);
});
var express = require('express');
mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path'); 

var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json()); //not using url encoded 

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(7000, function(){
	console.log("listening on 7000");
});
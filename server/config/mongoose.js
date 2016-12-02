//mongoose = require('mongoose'); this is global

var fs = require('fs');

mongoose.connect('mongodb://localhost/PlayersTeams');

//console.log(__dirname);
var models_path = __dirname + "/../models";

fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') > 0) {
		require(models_path + '/' + file);
	}
})
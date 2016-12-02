var players = require('../controllers/players.js');
var teams = require('../controllers/teams.js');

module.exports = function (app) {

	app.get('/players', players.index);
	app.post('/players', players.create);
	app.post('/players/:id', players.update);
	app.post('/players/:id/destroy', players.destroy);

	app.get('/teams', teams.index);
	app.post('/teams', teams.create);
	app.post('/teams/assign', teams.assign);
	app.post('/teams/:id', teams.update);
	app.post('/teams/:id/destroy', teams.destroy);

}
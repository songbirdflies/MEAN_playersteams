myApp.config(function ($routeProvider){
	$routeProvider
	.when('/players', {
		templateUrl: '/partials/players.html'
	})
	.when('/teams', {
		templateUrl: '/partials/teams.html'
	})
	.when('/assignments', {
		templateUrl: '/partials/assignments.html'
	})
	.otherwise({
		redirectTo: '/players'
	})
})
myApp.controller('TeamsController', function(TeamsFactory, $scope){
	$scope.teams = [];

	TeamsFactory.index(function(teams){
		$scope.teams = teams;
	});

	$scope.create = function(){
		//does this need a callback in PlayerFactory.create?
		TeamsFactory.create($scope.newTeam, function(teams){
			$scope.teams = teams;
		})
			$scope.newTeam = {};
	}

	$scope.destroy = function(teamId){
		TeamsFactory.destroy(teamId, function(teams){
			$scope.teams = teams;
		})
	}


})

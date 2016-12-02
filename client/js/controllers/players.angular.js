myApp.controller('PlayersController', function(PlayersFactory, $scope){
	$scope.players = [];

	PlayersFactory.index(function(players){
		$scope.players = players;
	});

	$scope.create = function(){
		//does this need a callback in PlayerFactory.create?
		PlayersFactory.create($scope.newPlayer, function(players){
			$scope.players = players;
		})
			$scope.newPlayer = {};
	}

	$scope.destroy = function(playerId){
		PlayersFactory.destroy(playerId, function(players){
			$scope.players = players;
		})
	}

})

myApp.controller('AssignmentsController', function ($scope, TeamsFactory, PlayersFactory){
      
      $scope.assignments = []; 

/*      AssignmentsFactory.index(function (data) {
        $scope.assignments = data;
      });
*/
        PlayersFactory.index(function(players){
          $scope.players = players;
        });

        TeamsFactory.index(function(teams){
          $scope.teams = teams;
        });

        


        $scope.create = function(){
          TeamsFactory.assign($scope.newAssignment, function(players){
            $scope.players = players;
          });
          $scope.newAssignment = {};
        }
/*      $scope.create = function() {
        var selected_player = $scope.newAssignment.player;
        var selected_team = $scope.newAssignment.team;
        $scope.newAssignment = selected_player.concat('has been drafted to: ' +selected_team);
      AssignmentsFactory.create($scope.newAssignment, function(assignments){
			$scope.assignments = assignments;
			})
			$scope.newAssignment= {};
      };

      $scope.destroy = function(assignmentId){
		AssignmentsFactory.destroy(assignmentsId, function(assignments){
			$scope.assignments = assignments;
			})
		}*/
      

  
    });

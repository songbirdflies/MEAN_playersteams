myApp.factory('TeamsFactory', function ($http){
     var factory = {};
     

     factory.index = function(callback){
      $http.get('/teams').success(function(teams){
        callback(teams);
      })
     }

      factory.create = function(team_info, callback){
       $http.post('/teams', team_info).success(function(teams){
        callback(teams);
       })
      }

      factory.destroy = function(teamId, callback){
        $http.post('/teams/'+teamId+'/destroy').success(function(teams){
        callback(teams);
      })
    }

      factory.assign = function(assign_info, callback){
        $http.post('/teams/assign', assign_info).success(function(players){
          //console.log(players)
      callback(players);
      })
    }

      return factory;
})
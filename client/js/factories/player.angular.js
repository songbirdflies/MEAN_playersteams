myApp.factory('PlayersFactory', function ($http){
     var factory = {};
     

     factory.index = function(callback){
      $http.get('/players').success(function(players){
        callback(players);
      })
     }

      factory.create = function(player_info, callback){
       $http.post('/players', player_info).success(function(players){
        callback(players);
       })
      }

      factory.destroy = function(playerId, callback){
        $http.post('/players/'+playerId+'/destroy').success(function(players){
        callback(players);
      });
    }

      return factory;
})
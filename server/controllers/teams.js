var Team = mongoose.model('Team');
var Player = mongoose.model('Player');

module.exports = (function(){
	return {
		index: function(req, res){
			console.log("Server/Ctrl/Team - Index");
			//console.log(req);
		Team.find({}).populate('_players') 
			.exec(function(err, teams){
				//console.log(teams)
				if(err){
					console.log(err);
				}
				else{
					//console.log(teams);
					res.json(teams);
				}
			})
		},
		
		create: function(req, res){
			console.log("Server/Ctrl/Player - Create")
			var team = new Team(req.body);
			team.save(function(err){
				if (err){
					console.log(err)
				}
				else {					
					res.redirect('/teams');
				}
			})
		},

		update: function(req, res){
			console.log("Server / Ctrl / Team - Update")
			//console.log("Update params id:", request.params.id);
			Team.findByIdAndUpdate(request.params.id, {$set: {name: req.body.name}},
				function(err, team){
				if(err){
					console.log(err);
				}
				else {
					res.redirect('/teams');
				}
			})

		},

	destroy: function(req, res){
			console.log("Server / Ctrl / Team- Destroy");
			//console.log("Destroy params id:", request.params.id);
			Team.findByIdAndRemove(req.params.id, function(err){ //request.params.id is deleting the specific user 
				if(err){
					console.log(err);
				}
				else {
					res.redirect('/teams');
				}
			})
	},

	assign: function(req, res){
		//console.log(req.body);
      Team.findOne({_id: req.body.team}, function(err, team){
        Player.findOne({_id: req.body.player}, function(err, player){
          team._players.push(player);
          player._team = team._id;
          team.save(function(err){
            if (err){
              console.log(err);
            }
          })
          player.save(function(err){
            if (err){
              console.log(err);
            }
          });
          res.redirect('/players');
        })
      })
    }

 }
})();
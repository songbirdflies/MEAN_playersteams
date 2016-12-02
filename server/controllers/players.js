var Player = mongoose.model('Player');

module.exports = (function(){
	return {
		index: function(req, res){
			console.log("Server/Ctrl/Player - Index");
			//console.log(req);
		Player.find({}).populate('_team') 
			.exec(function(err, players){
				if(err){
					console.log(err);
				}
				else{
					//console.log(players);
					res.json(players);
				}
			})
		},
		
		create: function(req, res){
			console.log("Server/Ctrl/Player - Create")
			var player = new Player(req.body);
			player.save(function(err){
				if (err){
					console.log(err)
				}
				else {					
					res.redirect('/players');
				}
			})
		},

		update: function(req, res){
			console.log("Server / Ctrl / Player - Update")
			//console.log("Update params id:", request.params.id);
			Player.findByIdAndUpdate(request.params.id, {$set: {name: req.body.name}},
				function(err, player){
				if(err){
					console.log(err);
				}
				else {
					res.redirect('/players');
				}
			})

		},

	destroy: function(req, res){
			console.log("Server / Ctrl / Player - Destroy");
			//console.log("Destroy params id:", request.params.id);
			Player.findByIdAndRemove(req.params.id, function(err){ //request.params.id is deleting the specific user 
				if(err){
					console.log(err);
				}
				else {
					res.redirect('/players');
				}
			})

		}
	}
})();
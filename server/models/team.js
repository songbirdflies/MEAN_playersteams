var TeamSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	//referencing ObjectId from Player schema, it's an array bc many players
	_players: [{type: mongoose.Schema.Types.ObjectId, ref: 'Player'}]  
}, {timestemps: true}); //does created_at & updated_at for us

mongoose.model('Team', TeamSchema);
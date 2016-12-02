var PlayerSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	//referencing ObjectId from team schema
	_team: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'} 
}, {timestemps: true}); //does created_at & updated_at for us

mongoose.model('Player', PlayerSchema);
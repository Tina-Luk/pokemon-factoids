const Pokemon = require('../../database/models/pokemon');

exports.getAll = (req, res) => {
	Pokemon.find({}, (err, data) => {
		if (err) {
			console.log(err);
			res.status(404).send('err getting all data');
		} else {
			res.status(200).send(data);
		}
	});
};

exports.add = (req, res) => {
	const newPokemon = new Pokemon(req.body);
	// add method to see if pokemon exists or not before adding
	newPokemon.save((err, data) => {
		if (err) {
			console.log(err);
			res.status(404).send(`err adding ${req.body.name}`);
		} else {
			res.status(200).send(data);
		}
	});
};

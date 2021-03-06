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
	Pokemon.findOne({ no: req.body.no }, (err, data) => {
		if (data === null) {
			const newPokemon = new Pokemon(req.body);
			newPokemon.save((err, data) => {
				if (err) {
					console.log(err);
					res.status(404).send(`err adding ${req.body.name}`);
				} else {
					res.status(200).send(data);
				}
			});
		} else {
			res.status(400).send('Pokemon exists already - delete first');
		}
	});
};

exports.delete = (req, res) => {
	const removePokemon = req.params.id;
	Pokemon.deleteMany({ no: removePokemon }, (err, data) => {
		if (err) {
			console.log(err);
			res.status(404).send(`err removing all ${removePokemon}`);
		} else {
			res.status(200).send(data);
		}
	});
};

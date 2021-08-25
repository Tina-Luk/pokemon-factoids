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

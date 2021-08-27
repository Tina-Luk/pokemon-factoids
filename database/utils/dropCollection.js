const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pokemon-test', {
	useNewUrlParser: true,
});
const connection = mongoose.connection;

connection.once('open', () => {
	console.log('MongoDB connected successfully');
	connection.db.listCollections().toArray((err, collections) => {
		if (err) {
			console.log(err);
		} else {
			if (collections.length > 0) {
				console.log('Collections Exists in DB');
				mongoose.connection.db.dropCollection('pokemons', (err, result) => {
					if (err) {
						console.log(err);
					} else {
						console.log('Collection dropped');
					}
				});
			}
		}
	});
});

module.exports = connection;

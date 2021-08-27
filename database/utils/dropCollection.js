const mongoose = require('mongoose');
const config = require('./atlasConfig');
const config = mongoose.connect(`mongodb+srv://tina:${config.password}@pokemon-codetest.m5rji.mongodb.net/pokemons?retryWrites=true&w=majority`, {
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

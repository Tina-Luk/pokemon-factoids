const mongoose = require('mongoose');
const config = require('./atlasConfig');

const mongoURI = `mongodb+srv://${config.username}:${config.password}@${config.cluster}/pokemons?retryWrites=true&w=majority`;

const db = mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

db.then((db) => console.log(`Connected to: ${mongoURI}`)).catch((err) => {
	console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
	console.log(err);
});

module.exports = db;

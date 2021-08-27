const mongoose = require('mongoose');
const config = require('./utils/atlasConfig');

const mongoURI = `mongodb+srv://tina:${config.password}@pokemon-codetest.m5rji.mongodb.net/pokemons?retryWrites=true&w=majority`;

const db = mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

db.then((db) => console.log(`Connected to: ${mongoURI}`)).catch((err) => {
	console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
	console.log(err);
});

module.exports = db;

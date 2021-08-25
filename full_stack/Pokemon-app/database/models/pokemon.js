const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
	no: { type: Number },
	name: { type: String },
	abilitiesNormal: { type: String },
	abilitiesHidden: { type: String },
	type: { type: String },
	image: { type: String },
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;

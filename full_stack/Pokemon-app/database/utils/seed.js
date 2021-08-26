const connection = require('./dropCollection.js');
const axios = require('axios');
const envURL = 'http://localhost:3001/';
const pokemonSeed = [];
const promises = [];

const addTenPokemon = () => {
	for (let i = 1; i <= 10; i++) {
		promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
	}
};

addTenPokemon();

const abilities = (arrayAbilities) => {
	let abilities = '';
	for (let i = 0; i < arrayAbilities.length; i++) {
		abilities += arrayAbilities[i].ability.name + ' ,';
	}
	return abilities;
};
const type = (arrayTypes) => {
	let type = '';
	for (let i = 0; i < arrayTypes.length; i++) {
		type += arrayTypes[i].type.name + ', ';
	}
	return type;
};

Promise.all(promises)
	.then((res) => {
		for (let i = 0; i < res.length; i++) {
			let pokeData = {
				no: res[i].data.order,
				name: res[i].data.species.name,
				abilities: abilities(res[i].data.abilities),
				type: type(res[i].data.types),
				image: res[i].data.sprites.front_default,
			};
			pokemonSeed.push(pokeData);
		}
		return pokemonSeed;
	})
	.then((seed) => {
		for (let i = 0; i < seed.length; i++) {
			axios
				.post(`${envURL}pokemon/`, seed[i])
				.then((res) => console.log(res.status, res.data))
				.catch((err) => console.log(`error getting pokemon data from number ${i}`));
		}
	})
	.then(() => {
		connection.close();
	})
	.catch((err) => console.log(err));

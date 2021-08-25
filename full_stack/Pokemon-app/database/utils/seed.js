const axios = require('axios');
const envURL = 'http://localhost:3001/';
const pokemonSeed = [];
const promises = [];

const addTenPokemon = () => {
	for (let i = 1; i <= 10; i++) {
		promises.push(axios.get(`https://pokeapi.glitch.me/v1/pokemon/${i}`));
	}
};

addTenPokemon();

Promise.all(promises)
	.then((res) => {
		for (let i = 0; i < res.length; i++) {
			let pokeData = {
				no: res[i].data[0].number,
				name: res[i].data[0].name,
				abilitiesNormal: res[i].data[0].abilities.normal.join(', '),
				abilitiesHidden: res[i].data[0].abilities.hidden.join(', '),
				type: res[i].data[0].types.join(', '),
				image: res[i].data[0].sprite,
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
	.catch((err) => console.log(err));

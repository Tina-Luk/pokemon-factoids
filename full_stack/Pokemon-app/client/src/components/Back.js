import React from 'react';
import { Message } from 'semantic-ui-react';

function Back({ pokemons, index }) {
	let number = pokemons.length > 0 ? pokemons[index].no : '';
	let name = pokemons.length > 0 ? pokemons[index].name : '';
	let abilitiesNormal = pokemons.length > 0 ? pokemons[index].abilitiesNormal : '';
	let abilitiesHidden = pokemons.length > 0 ? pokemons[index].abilitiesHidden : '';
	let type = pokemons.length > 0 ? pokemons[index].type : '';

	return (
		<Message>
			<h4>No.: {number}</h4>
			<h4>Name: {name}</h4>
			<h4>Type: {type}</h4>
			<h4>Abilities: </h4>
			<p>Normal: {abilitiesNormal}</p>
			<p>Hidden: {abilitiesHidden}</p>
		</Message>
	);
}

export default Back;

import React from 'react';
import { Message } from 'semantic-ui-react';

function Back({ pokemons, index }) {
	let number = pokemons.length > 0 ? pokemons[index].no : '';
	let name = pokemons.length > 0 ? pokemons[index].name : '';
	let abilities = pokemons.length > 0 ? pokemons[index].abilities : '';
	let type = pokemons.length > 0 ? pokemons[index].type : '';

	return (
		<Message>
			<h4>No.: {number}</h4>
			<h4>Name: {name.toUpperCase()}</h4>
			<h4>Type: {type.toUpperCase()}</h4>
			<h4>Abilities: {abilities.toUpperCase()}</h4>
		</Message>
	);
}

export default Back;

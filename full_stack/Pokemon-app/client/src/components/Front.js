import React from 'react';
import { Message, Image } from 'semantic-ui-react';

function Front({ pokemons, index, onClick }) {
	let imageUrl = pokemons.length > 0 ? pokemons[index].image : 'empty';

	return (
		<Message onClick={onClick}>
			<h4>Guess this Pokemon?!</h4>
			<Image src={imageUrl} wrapped ui={false} />
		</Message>
	);
}

export default Front;

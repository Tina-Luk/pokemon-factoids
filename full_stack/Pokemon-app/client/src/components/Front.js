import React from 'react';
import { Message, Image } from 'semantic-ui-react';
import './App.css';

function Front({ pokemons, index, onClick }) {
	let imageUrl = pokemons.length > 0 ? pokemons[index].image : 'empty';

	return (
		<div className="card">
			<Message onClick={onClick}>
				<h4>Guess this Pokemon?!</h4>
				<Image src={imageUrl} wrapped ui={false} />
			</Message>
		</div>
	);
}

export default Front;

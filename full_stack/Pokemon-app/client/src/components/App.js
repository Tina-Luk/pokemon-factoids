import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const pokemonUrl = 'http://localhost:3001/';

function App() {
	const [pokemons, setPokemons] = useState([]);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		getPokemon();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getPokemon = () => {
		axios
			.get(`${pokemonUrl}pokemon`)
			.then((res) => {
				console.log('here', res.data);
				setPokemons(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="App">
			<header className="App-header"></header>
			<p>{pokemons.length > 0 ? pokemons[index].name : ''}</p>
		</div>
	);
}

export default App;

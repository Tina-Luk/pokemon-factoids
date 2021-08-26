import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Front from './Front';

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
			<Front pokemons={pokemons} index={index} />
		</div>
	);
}

export default App;

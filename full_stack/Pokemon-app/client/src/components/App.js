import './App.css';
import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';
import Front from './Front';
import Back from './Back';

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
				setPokemons(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const onClick = (direction) => {
		if (direction === 'next') {
			if (index === pokemons.length - 1) {
				setIndex(0);
			} else {
				setIndex(index + 1);
			}
		} else {
			if (index === 0) {
				setIndex(pokemons.length - 1);
			} else {
				setIndex(index - 1);
			}
		}
	};

	return (
		<div className="App">
			<Button>Add</Button>
			<Front pokemons={pokemons} index={index} />
			<Back pokemons={pokemons} index={index} />
			<Button onClick={() => onClick('back')}>Back</Button>
			<Button onClick={() => onClick('next')}>Next</Button>
		</div>
	);
}

export default App;

import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, Input } from 'semantic-ui-react';
import axios from 'axios';
import Front from './Front';
import Back from './Back';

const pokemonUrl = 'http://localhost:3001/';

function App() {
	const [pokemons, setPokemons] = useState([]);
	const [index, setIndex] = useState(0);
	const [add, setAdd] = useState('');

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

	const deletePokemon = () => {
		let id = pokemons[index].no;
		axios
			.delete(`http://localhost:3001/pokemon/${id}`)
			.then((res) => {
				console.log(`deleted pokemon # ${id}`);
				setPokemons(pokemons.splice(id, 1));
				// setIndex(index - 1);
			})
			.catch((err) => {
				console.log('error deleting pokemon');
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
	console.log(add);
	return (
		<div className="App">
			<h1>POKEMON FACTOIDS</h1>
			<div>
				<p>Enter Pokemon Name or Number: </p>
				<Input placeholder="bulbasaur" onChange={(e) => setAdd(e.target.value)} />
				<Button>Add</Button>
			</div>
			<br />
			<div>
				<Button onClick={deletePokemon}>Delete Pokemon from Pokedex</Button>
			</div>
			<Front pokemons={pokemons} index={index} />
			<Back pokemons={pokemons} index={index} />
			<Button onClick={() => onClick('back')}>Back</Button>
			<Button onClick={() => onClick('next')}>Next</Button>
		</div>
	);
}

export default App;

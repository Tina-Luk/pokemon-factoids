import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, Input } from 'semantic-ui-react';
import axios from 'axios';
import Front from './Front';
import Back from './Back';
import pokeObj from '../helpers/pokemonAPIhelper';

function App() {
	const [pokemons, setPokemons] = useState([]);
	const [index, setIndex] = useState(0);
	const [add, setAdd] = useState('');
	const [infoDisplayed, setInfoDisplayed] = useState(false);

	useEffect(() => {
		getPokemon();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getPokemon = () => {
		axios
			.get(`/pokemon`)
			.then((res) => {
				setPokemons(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const deletePokemon = () => {
		if (window.confirm(`Are you sure you want to remove ${pokemons[index].name} from your deck?`)) {
			let id = pokemons[index].no;
			if (index === pokemons.length - 1) setIndex(pokemons.length - 2);
			axios
				.delete(`/pokemon/${id}`)
				.then((res) => {
					console.log(`deleted pokemon # ${id}`);
					let newList = pokemons.slice();
					newList.splice(index, 1);
					setPokemons(newList);
					setInfoDisplayed(false);
				})
				.catch((err) => {
					console.log('error deleting pokemon');
				});
		}
	};

	const onAddClick = () => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${add}`)
			.then((res) => {
				let pokemon = pokeObj(res.data);
				if (window.confirm(`Are you sure you want to add ${pokemon.name.toUpperCase()} to your deck?`)) {
					axios
						.post(`/pokemon/`, pokemon)
						.then((res) => {
							console.log(`added ${add} successfully`);
							let newList = pokemons.slice();
							newList.push(pokemon);
							setPokemons(newList);
							setIndex(newList.length - 1);
							setInfoDisplayed(false);
						})
						.catch((err) => {
							console.log(err);
							window.alert(`Error: ${pokemon.name} may exist already`);
						});
				}
			})
			.catch((err) => console.log(err));
	};

	const onClick = (direction) => {
		console.log('clicked');
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
		setInfoDisplayed(false);
	};

	const showBack = () => {
		setInfoDisplayed(!infoDisplayed);
	};

	return (
		<div className="App">
			<h1>POKEMON FACTOIDS</h1>
			<div className="back-next-container">
				<Button onClick={() => onClick('back')}>Back</Button>
				<Button onClick={() => onClick('next')}>Next</Button>
			</div>
			{!infoDisplayed ? (
				<Front pokemons={pokemons} index={index} onClick={showBack} />
			) : (
				<div>
					<Back pokemons={pokemons} index={index} onClick={showBack} />
					<Button onClick={deletePokemon}>Delete {pokemons.length > 0 ? pokemons[index].name.toUpperCase() : ''} from Pokedex</Button>
				</div>
			)}
			<div className="back-next-container">
				<p>Add Pokemon Name or Number: </p>
				<Input placeholder="bulbasaur or 1" onChange={(e) => setAdd(e.target.value)} />
				<Button onClick={onAddClick}>Add</Button>
			</div>
		</div>
	);
}

export default App;

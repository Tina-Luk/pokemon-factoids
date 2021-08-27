const abilities = (arrayAbilities) => {
	let abilities = '';
	for (let i = 0; i < arrayAbilities.length; i++) {
		i === arrayAbilities.length - 1 ? (abilities += arrayAbilities[i].ability.name) : (abilities += arrayAbilities[i].ability.name + ', ');
	}
	return abilities;
};

const type = (arrayTypes) => {
	let type = '';
	for (let i = 0; i < arrayTypes.length; i++) {
		i === arrayTypes.length - 1 ? (type += arrayTypes[i].type.name) : (type += arrayTypes[i].type.name + ', ');
	}
	return type;
};

function pokeObj(data) {
	let pokeData = {
		no: data.id,
		name: data.species.name,
		abilities: abilities(data.abilities),
		type: type(data.types),
		image: data.sprites.front_default,
	};
	return pokeData;
}

export default pokeObj;

const pokemons = [
  {
    id: 25,
    name: 'Pikachu'
  },
  {
    id: 1,
    name: 'Bulbasaur'
  },
  {
    id: 6,
    name: 'Charizard'
  },
  {
    id: 133,
    name: 'Evee'
  },
  {
    id: 151,
    name: 'MewTwo'
  },
  {
    id: 129,
    name: 'MagiKarp'
  }
]

// Find obj in Arrays
// FIND - called with every element in Array // Not Performant with lg arrays
const evee = pokemons.find(pokemon => {
  return pokemon.id === 133
})

// DICTIONARY | generate map structure
const pokemonsById = {}

pokemons.map(pokemon => {
  pokemonsById[pokemon.id] = pokemon
})

// instant lookup / very perfomant
pokemonsById
pokemonsById[133]
pokemonsById[25]

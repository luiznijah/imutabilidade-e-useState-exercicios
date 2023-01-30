import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  })

  const [pikachu, setPikachu]= useState ({
    name: "pikachu",
    type: "Eletrico",
    color: "yellow",
    evolved: true,
    weight: 6,
    image: 'https://archives.bulbagarden.net/media/upload/archive/b/b4/20220911034246%210025Pikachu-Cosplay.png'
  })

  const [gengar, setGengar] = useState({
    name: "Gengar",
    type: "ghost",
    evolved: true,
    weight: 4,
    color: 'purple',
    image: 'https://archives.bulbagarden.net/media/upload/archive/4/47/20220312001437%210094Gengar.png',
    id: 1
  });
  const [gengarMega, setGengarMega]= useState({
    name: "Gengar Mega",
    type: "ghost",
    color: "purple",
    evolved: true,
    weight: 6,
    image: 'https://archives.bulbagarden.net/media/upload/c/c8/0094Gengar-Mega.png'
  });
  const [abra, setAbra]= useState({
    name: "Abra",
    type: "Mistic",
    color: "orange",
    evolved: true,
    weight: 6,
    image: 'https://archives.bulbagarden.net/media/upload/archive/b/bd/20190405150308%210063Abra.png'
  });
  const [kadabra, setKadabra]= useState({
    name: "Kadabra",
    type: "Mistic",
    color: "orange",
    evolved: true,
    weight: 8,
    image: 'https://archives.bulbagarden.net/media/upload/a/af/0064Kadabra.png'
  })

  const [chikorita, setChikorita] = useState({
    name: "Chikorita",
    type: "Grass",
    color: "green",
    evolved: true,
    weight: 4,
    image: 'https://archives.bulbagarden.net/media/upload/b/bc/0152Chikorita.png' 
  })

  const [bayleef ,setBayleef] = useState({
    name: "Bayleef",
    type: "Grass",
    color: "green",
    evolved: true,
    weight: 9,
    image: 'https://archives.bulbagarden.net/media/upload/8/85/0153Bayleef.png'

  })

  // Para fazer seus próximos pokemons, crie novos estados!
  

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard //pichu
      nome={pokemon.name}
      tipo={pokemon.type}
      evolucao={pokemon.evolved}
      peso={pokemon.weight}
      cor={pokemon.color}
      imagem={pokemon.image}
      id={pokemon.id}
      setPokemon= {setPokemon}
      evolutionPokemon={pikachu}

        
      />
      <PokemonCard //gengar
      nome={gengar.name}
      tipo={gengar.type}
      evolucao={gengar.evolved}
      peso={gengar.weight}
      cor={gengar.color}
      imagem={gengar.image}
      id={gengar.id}
      setPokemon= {setGengar}
      evolutionPokemon={gengarMega}
        
      />
      <PokemonCard //abra
      nome={abra.name}
      tipo={abra.type}
      evolucao={abra.evolved}
      peso={abra.weight}
      cor={abra.color}
      imagem={abra.image}
      id={abra.id}
      setPokemon= {setAbra}
      evolutionPokemon={kadabra}
        
      />
      <PokemonCard //chikorita
      nome={chikorita.name}
      tipo={chikorita.type}
      evolucao={chikorita.evolved}
      peso={chikorita.weight}
      cor={chikorita.color}
      imagem={chikorita.image}
      id={chikorita.id}
      setPokemon= {setChikorita}
      evolutionPokemon={bayleef}
        
      />
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;

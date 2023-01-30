import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = ({
  nome, 
  tipo, 
  evolved, 
  peso, 
  cor, 
  imagem, 
  id, 
  setPokemon,
  evolutionPokemon
  } ) => {

    const evoluirPokemon = () => {
      console.log(nome)

      if(evolved){
        alert("esse pokemon não evolui")

      } else{
        setPokemon(evolutionPokemon)

      }    

    }
    
  return (
    <Card color={cor}>
        <img src={imagem} alt={`Pokemon`}/>
        <PokemonName>{nome}</PokemonName>
        <PokemonType>{tipo}</PokemonType>
        <p>{peso}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard
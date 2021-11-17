import React from 'react';
import { useEffect, useState } from 'react';

const Home = () => {

    const [pokemon, setPokemon] = useState(null)
    const [random, setRandom] = useState(1)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
          .then(response => response.json())
          .then(result => setPokemon(result))
    }, []);

    // useEffect(() => { 
        
    //   }, [random])
    
    const handleButtonClick = () => {
        const id = Math.floor(Math.random() * (151 - 1 + 1) + 1) 
        setRandom(id);
    }

        

   
    if (pokemon == null) {
        return null
    } else {
        // console.log(pokemon.sprites.other["o"])
        return (

            <>
                <h1>
                    HOME
                </h1>
                <div> 
                    <button onClick={handleButtonClick}> Random Pokemon </button>
                    <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
                    <p> Nom : {pokemon.name} </p>
                    <p> Taille : {pokemon.height} </p>
                    <p> Poids : {pokemon.weight} </p>
                    <p> Type : {pokemon.types.map(type => <ul><li>{type.type.name}</li></ul>)} </p>
                    

                </div>
            </>
        );
    }
    
};  


export default Home;




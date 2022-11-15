import { doc, getDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../Firebase/FirebaseStore';
import { PokeContext } from '../Store/store';
import PokemonDetail from './PokemonDetail'

const PokiComparison = () => {
    const [selectedPoki,setSelectedPoki]=useState([])
    const ctx = useContext(PokeContext);
    console.log(ctx.allPokisData)
    useEffect(() => {
      getSelectedPokemon("122")
        .then((arr) => {
          setSelectedPoki(arr);
        })
        .catch((error) => {
          console.log("firebase fetching error", error);
        });
    }, []);
    const getSelectedPokemon = async (poke) => {
      const res = await getDoc(doc(db, "Pokemons","122" ));
    
      return res.data() ? res.data().Likes : [];
    };
      
      console.log(selectedPoki,"<><><>")
  return (
    <div>
        <h1>Pokemon Comparison</h1>
        {/* <button onClick={getLikesArticles}>compare favourite getLikesArticles</button> */}
        {/* {selectedPoki.map((e)=>{
          return  <li>{e}</li>
        })} */}
    </div>
  )
}

export default PokiComparison
import React, { useContext } from "react";

import { PokeContext } from "../Store/store";
import classes from "./PokemonDetail.module.css";
const PokemonDetail = () => {
  const ctx = useContext(PokeContext);
  const data = ctx.myData;
  console.log(data.id);
  const comparisonHandler = ()=>{

      ctx.allPokisData.forEach((item)=>{
        console.log(item.id)
      })
    
  }
  return (
    <div className={classes.description}>
      <img src={data.sprites.front_default} />
      <h2>
       
        {data.name} ({data.id})
      </h2>
      <h3>Player Order : {data.order}</h3>
      <h4>Base Experience : {data.base_experience}</h4>
      <h4>Height : {data.height}</h4>
      <h4>weight : {data.weight}</h4>
      <h4>Abilities</h4>
      {data.abilities.map((e) => {
        return <li key={e.id}>{e.ability.name}</li>;
      })}
      <button onClick={comparisonHandler}>Compare with others</button>
    </div>
  );
};

export default PokemonDetail;

import React from 'react'
import classes from './CardWrapper.module.css'
//--- this component is used multiple times that is why im using this in component folder, basically is jus t behave like card to show data only
// i just changed it name from card to carwrapper to remove confusion in my mind
const CardWrapper = ({data,index}) => {
  return (
   <>
    <div key={index} className={classes.description}>
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
    })}</div></>
  )
}

export default CardWrapper
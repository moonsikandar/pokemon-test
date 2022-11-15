import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CardWrapper from "../component/CardWrapper";
import { PokeContext } from "../Store/store";
import classes from "./PokemonDetail.module.css";
const PokemonDetail = () => {
  const [matchedPokis, setMatchedPokis] = useState([]);
  const [selectedPoki, setSelectedPoki] = useState([]);
  const [styleChange,setStyleChange]=useState(true)
  const [isMatchFound,setIsMatchFound]=useState(false)
  // we used different classes on different condition in this for styling
  // second button will dis appear after compare data is displayed
  const ctx = useContext(PokeContext);
  const data = ctx.myData;
  // in this useEfffect im just calling a setfunction to stop rendering infinite times
  // if i simply use variable this uesEffect hook giveus error
  useEffect(() => {
    setSelectedPoki(ctx.likedPokimons)
  }, []);
  // this function is used to compare data which is coming from firebase(basically only id is stored in firebase, by matching this id with fetched entire pokimons ids)
  // when dataMatched we just store in other array to use this to display
  const comparisonHandler = () => {
    setStyleChange(false)
    ctx.allPokisData.map((ele) => {
      for (let i of selectedPoki) {
        if (ele.id == i) {
       
          setMatchedPokis((state) => {
            setIsMatchFound(true)

            return [...state, ele];
            
          });
        }
      }
    });
  };

  return (
    <div className={styleChange?classes.without_compare:classes.wrapper}>
      <CardWrapper data={data}/>
      {isMatchFound?<div>
        {matchedPokis.map((item,index)=>{
         return <CardWrapper data={item} index={index}/>
        })}
        </div>: <Button className={classes.bttn} onClick={comparisonHandler}>Compare with others</Button>
        }    
    </div>
  );
};

export default PokemonDetail;

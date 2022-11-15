import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CardWrapper from "../component/CardWrapper";
import { PokeContext } from "../Store/store";
import { BsArrowLeftRight } from "react-icons/bs";
import classes from "./PokemonDetail.module.css";
const PokemonDetail = () => {
  const [matchedPokis, setMatchedPokis] = useState([]);
  const [selectedPoki, setSelectedPoki] = useState([]);
  const [styleChange,setStyleChange]=useState(true)
  const [isMatchFound,setIsMatchFound]=useState(false)

  const ctx = useContext(PokeContext);
  const data = ctx.myData;
 
  useEffect(() => {
    setSelectedPoki(ctx.likedPokimons)
  }, []);

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
      {styleChange?"":<BsArrowLeftRight className={classes.comparing}/>}
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

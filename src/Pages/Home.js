import axios from "axios";
import  Button  from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Element from "../Pages/Element";
import classes from "./Home.module.css"
const Home = () => {

  const [pokemons, setPokemons] = useState([]);
  const [isError, setIsError] = useState();
  const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextPokes, setNextPokes] = useState();
  const [previousPokes, setpreviousPokes] = useState();
  const [isLoading, setIsLoading] = useState(true);


  const getApiData = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(url);
      setNextPokes(result.data.next);
      setpreviousPokes(result.data.previous);
      getPokemon(result.data.results);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
    }
  };
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokemons((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };
  useEffect(() => {
    getApiData();
  }, [url]);
  return (
    
    <>
      <div className={classes.home}>
      {pokemons?<div className={classes.element_wrapper}>
        <Element
          pokeData={pokemons}
          loading={isLoading}
        /> 
      </div>: isError}
      <div className={classes.pagination}>
      {previousPokes && (
        <Button
          onClick={() => {
            seturl(previousPokes);
          }}
        >
          Previous
        </Button>
      )}
      {nextPokes && (
        <Button
          onClick={() => {
            seturl(nextPokes);
          }}
        >
          Next
        </Button>
      )}
    </div>
      </div>
    </>
  );
};
export default Home;

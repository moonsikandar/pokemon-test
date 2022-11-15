import React, { createContext, useState } from "react";
export const PokeContext = createContext();
const Store = ({ children }) => {

  const [allPokisData, setAllPokisData] = useState();
  const [myData, setMyData] = useState();
  const [likedPokimons, setLikedPokimons] = useState();
  return (
    <PokeContext.Provider
      value={{
        myData,
        allPokisData,
        likedPokimons,
        setMyData,
        setAllPokisData,
        setLikedPokimons,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export default Store;

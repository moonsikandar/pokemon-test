import React, { createContext, useState } from "react";
export const PokeContext = createContext();
const Store = ({ children }) => {
    const [allPokisData,setAllPokisData]=useState()
    const [myData, setMyData] = useState();
    return (
      <PokeContext.Provider value={{ myData,allPokisData, setMyData,setAllPokisData}}>
        {children}
      </PokeContext.Provider>
    );
  };

  export default Store;
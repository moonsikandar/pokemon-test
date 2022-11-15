import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import PokemonDetail from "./Pages/PokemonDetail";
import Store from "./Store/store";

function App() {
  // i didn't do anything in app(which is main component) except routing and 
  // wraping store compoment to rest of all component
  // i have use context api hook because it's low frequency application
  <Link to="/">
    <h2>Lets start by clicking here !!!</h2>
  </Link>;
  return (
    <div className="App">
      <Store>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pokidetail" element={<PokemonDetail/>} />
        </Routes>
      </Store>
    </div>
  );
}
export default App;

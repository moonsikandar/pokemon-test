import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import PokemonDetail from "./Pages/PokemonDetail";
import Store from "./Store/store";

function App() {

  <Link to="/">
    <h2>Lets start by clicking here !!!</h2>
  </Link>;
  return (
    <div className="App">
      <div className="container">
      <Store>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokidetail" element={<PokemonDetail />} />
          </Routes>
        </BrowserRouter>
      </Store>
      </div>
    </div>
  );
}
export default App;

import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import PokiComparison from './Pages/Comparison';
import Home from './Pages/Home';
import PokemonDetail from './Pages/PokemonDetail';

function App() {
 
    <Link to='/'><h2>Lets start by clicking here !!!</h2></Link>
  return (
    <div className="App">
     
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/pokidetail' element={<PokemonDetail/>}/>
      <Route path='/compare' element={<PokiComparison/>}/>
     </Routes>
    </div>
  );
}

export default App;

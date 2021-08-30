import './App.css';
import PokeState from './context/pokeState';
import Filter from './components/filter/filter';

const App = () => {

   
 

  return (
    <div className="container">
      <h1>Pokemón</h1>
        <PokeState />
    </div>
  );
}

export default App;
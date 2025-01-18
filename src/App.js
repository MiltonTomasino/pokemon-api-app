import './css/App.css';
import PokemonSearch from './components/search';
import Game from './components/game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon API Testing</h1>
      </header>
      {/* <PokemonSearch /> */}
      <Game />
    </div>
  );
}

export default App;

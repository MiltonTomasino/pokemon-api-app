import logo from './logo.svg';
import './css/App.css';
import PokemonSearch from './components/search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon API Testing</h1>
      </header>
      <PokemonSearch />
    </div>
  );
}

export default App;

import './App.css';
import Pokedex from './Components/Pokedex';
import Header from './Components/Header';

function App() {
  return (
    <main className='main-content'>
      <Header title='Pokedex' />
      <Pokedex />
    </main>
  );
}

export default App;

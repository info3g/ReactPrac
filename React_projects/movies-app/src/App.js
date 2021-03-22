import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import MoviesContext from './MoviesContext'

function App() {
  return (
    <div className="App">
      <MoviesContext>
        <Home/>
      </MoviesContext>
    </div>
  );
}

export default App;

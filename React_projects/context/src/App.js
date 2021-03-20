import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import Moviescontext from './Moviescontext'
function App() {
  return (
    <div className="App">
      <Moviescontext>
        <Home/>
      </Moviescontext>
    </div>
  );
}

export default App;

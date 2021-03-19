import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home';
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path='/' component={LandingPage} exact />
      <Route path='/home' component={Home} exact/>
      {/* <LandingPage/>
      <Home/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Order from './Pages/Order'
import Contact from './Pages/Contact'
import MealsContext from './MealsContext'
import Checkout from './Pages/Checkout'
function App() {
  return (
    <div className="App">
      <MealsContext>
       <BrowserRouter>
        <Route path = '/' component={Home} exact />
        <Route path='/order' component={Order} exact/>
        <Route path='/contact-us' component={Contact} exact />
        <Route path='/checkout' component={Checkout} exact/>
       </BrowserRouter>
      </MealsContext>
    </div>
  );
}

export default App;

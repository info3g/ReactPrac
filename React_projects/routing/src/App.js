// import logo from './logo.svg';
import './App.css';
import LandingPage from './Page/LandingPage'
import ConditionalRendering from './Components/ConditionalRendering'
import LocalStorage from './Components/LocalStorage';
import MulitpleLocalStorage from './Components/MulitpleLocalStorage'
function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <ConditionalRendering/> */}
      {/* <LocalStorage /> */}
      <MulitpleLocalStorage />
    </div>
  );
}

export default App;

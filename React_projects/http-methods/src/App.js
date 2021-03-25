import logo from './logo.svg';
import './App.css';
import Fetch from './Components/Fetch'
import Axios from './Components/Axios'
import HTMLUsingAxios from './Components/HTMLUsingAxios'
function App() {
  return (
    <div className="App">
      <Fetch/>
      <Axios/>
      <HTMLUsingAxios/>
    </div>
  );
}

export default App;

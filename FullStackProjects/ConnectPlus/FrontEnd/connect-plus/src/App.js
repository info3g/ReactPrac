import logo from './logo.svg';
import './App.css';
import Chat from './Pages/Chat'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login';
import Header from './Components/Header/Header'
import {BrowserRouter,Route} from 'react-router-dom'
import UserDashboard from './Pages/UserDashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
     {/* <Chat /> */}
     <Route path="/chats" component={Chat} exact  />
     {/* <SignUp /> */}
     <Route path="/signup" component={SignUp} exact />
     <Route path='/login' component={Login} exact />
     <Route path='/dashboard' component={UserDashboard} exact/>
     </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Chat from './Pages/Chat'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login';
import Header from './Components/Header/Header'
import {BrowserRouter,Route} from 'react-router-dom'
import UserDashboard from './Pages/UserDashboard';
import MessageContext from './MessageContext'


function App() {
  return (
    <div className="App">
      <MessageContext>
      <BrowserRouter>
      <Header />
     {/* <Chat /> */}
     <Route path="/chats" component={Chat} exact  />
     {/* <SignUp /> */}
     <Route path="/signup" component={SignUp} exact />
     <Route path='/login' component={Login} exact />
     <Route path='/dashboard' component={UserDashboard} exact/>
     </BrowserRouter>
     </MessageContext>
    </div>
  );
}

export default App;

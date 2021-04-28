import logo from './logo.svg';
import './App.css';
import Chat from './Pages/Chat'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login';
import Header from './Components/Header/Header'
import {BrowserRouter,Route} from 'react-router-dom'
import UserDashboard from './Pages/UserDashboard';
import MessageContext from './MessageContext'
import Home from './Pages/Home';
import AddContact from './Components/AddContact';


function App() {
  return (
    <div className="App">
      <MessageContext>
      <BrowserRouter>
      <Header />
     {/* <Chat /> */}
     <Route path='/' component={Home} exact />
     <Route path="/chats" component={Chat} exact  />
     {/* <SignUp /> */}
     <Route path="/signup" component={SignUp} exact />
     <Route path='/login' component={Login} exact />
     <Route path='/dashboard' component={UserDashboard} exact/>
     <Route path='/dashboard/add-contact' component={UserDashboard} exact />
     <Route path='/dashboard/remove-contact' component={UserDashboard} exact />
    
     </BrowserRouter>
     </MessageContext>
    </div>
  );
}

export default App;

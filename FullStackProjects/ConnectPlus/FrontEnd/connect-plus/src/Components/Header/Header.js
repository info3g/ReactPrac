import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import '../../ComponentStyles/Header.css'
import {MessageProvider} from '../../MessageContext'
import {useHistory} from 'react-router-dom'
function Header() {
    console.log('render')

    
    // const[isloggedin,setIsloggedin] = useState(false)
    const dataObj = useContext(MessageProvider)
    // dataObj.getLoggedStatus(localStorage.setItem('loggedin',false))

    const history =   useHistory()
    function logUserOut() {
        console.log('in')
        localStorage.setItem('loggedin',false)
        dataObj.getLoggedStatus()
        history.push('/')
        //update dataobject to change logout to login/sign up
    }   
    // console.log('this is '+ dataObj.isloggedin)
        // console.log(typeof localStorage.getItem('loggedin'))
        if(dataObj.isloggedin==='true'){
            // console.log(dataObj.isloggedin)
            return(
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="collapse navbar-collapse" >
                <ul class="navbar-nav mr-auto">
                <Link to="/"><li className="nav-item active">Home</li></Link>
                <div className="header-register">
                    
                    <Link to ='/'><li className="Logout-point active" onClick={logUserOut}>Logout</li></Link>
                </div>
                
                </ul>
                
            </div>
        </nav>
                </div>
            )
        }
        else{
            return( <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="collapse navbar-collapse" >
                <ul class="navbar-nav mr-auto">
                <Link to="/"><li className="nav-item active">Home</li></Link>
                <div className="header-register">
                    <Link to="/login"><li className="login-point active">Login</li></Link>
                    <Link to="/signup"><li className="signup-point active">Sign Up</li></Link>
                    
                </div>
                
                </ul>
                
            </div>
        </nav>
            </div>
            )
        }
   
            
}
export default Header
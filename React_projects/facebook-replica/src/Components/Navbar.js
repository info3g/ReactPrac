import React,{useEffect, useState} from 'react'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useHistory} from 'react-router'

import '../ComponentStyles/NavbarStyle.css'

function Navbar(){

    const[LUsername,setLUsername]=useState('')
    const[LPassword,setLPassword]=useState('')
    const[IsLogin, setIsLogin]=useState(false)

    let history = useHistory();
    

    function Login(){
        let loggedIn=0
        let credentials = JSON.parse(localStorage.getItem('cred'))
        console.log(credentials)
        for(let i=0;i<credentials.length;i++){

            if(credentials[i].username===LUsername && credentials[i].password===LPassword){
                
                //why does IsLogin value is false even after setting it to true??
                setIsLogin(true)
                loggedIn+=1
            }
            
        }
        if(loggedIn){
            alert('login') 
            history.push({pathname:'/home'});
        }

        else{
            alert('Login Failed')
        }
        
        
    }

    function Logout(){
        setIsLogin(false)
        history.push('/')
    }

    return <div className='Navbar-header'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1>FACEBOOK</h1>
                </div>
                {
                    (()=>{
                        // {alert('is login '+ {IsLogin})}
                        if(IsLogin){    
                           
                           return <div>
                                <button onClick={Logout}>Logout</button>
                            </div>
                        }
                        else{
                            return <div className='col-md-6 login'>
                                <input type='text' placeholder='Username' value={LUsername} onChange={(e)=>{setLUsername(e.target.value)}}/>
                                <input type='text' placeholder='Password' value={LPassword} onChange={(e)=>{setLPassword(e.target.value)}}/>
                                {/* <Link to='/home' className='btn btn-primary' onClick={Login}>LOGIN */}
                                    <button className='btn btn-primary' onClick={Login}>LOGIN</button>
                                {/* </Link> */}
                            </div>
                        }
                    })()
                }
                
            </div>    
        </div>

}
export default Navbar
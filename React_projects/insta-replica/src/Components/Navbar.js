import React, { useEffect, useState} from 'react'
// import React,{Component} from 'react'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useHistory} from 'react-router-dom'





function Navbar() {
    const history = useHistory()
    
    const[isclicked,setIsClicked] = useState(false)

    
    
    // let i=0
    // alert('reload')
    function Login() {

        setIsClicked(true)
        // i=1
        history.push('/home')
        // alert(i)
        
    }

    function Logout() {
        setIsClicked(false)
        // i=0
        history.push('/')
    }

    return <div className='Header-Navbar'>
        <div className='row'>
            <div className='col-md-6'>
                <h1>Instagram</h1>
            </div>
            {
                (()=>{
                    if(isclicked){
                        return <div>
                            <h1>1</h1>
                            <button onClick={Logout}>Logout</button>

                        </div>
                    }

                    else{
                        return <div className='col-md-6'>
                            <h1>2</h1>
                            <button onClick={Login}> Login </button>
                        </div>
                    }
                     
                })()
            }
            
        </div>
    </div>
}
export default Navbar
// export default withRouter(Navbar) 
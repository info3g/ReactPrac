import React, { useState } from 'react'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from '../facebook.png'

function Registration() {


    const[RName,setRName]=useState('')
    const[RUsername,setRUsername]=useState('')
    const[RPassword,setRPassword]=useState('')
    
    function RegisterMe(){
        alert(123)
        let credentials = JSON.parse(localStorage.getItem('cred') || "[]")

        let credential = {
            username:RUsername,
            password:RPassword
        }

        credentials.push(credential)

        localStorage.setItem('cred',JSON.stringify(credentials))
    }

    return <div>
        <div className='row'>
            <div className='col-md-6 Image'>
                <img src={logo} />
            </div>
            <div className='col-md-6 register'>
                <h1>Register</h1>
                <input type='text' placeholder='Name' value={RName} onChange={(e)=>{setRName(e.target.value)}} /><br/>
                <input type='text' placeholder='Username' value={RUsername} onChange={(e)=>{setRUsername(e.target.value)}} /><br/>
                <input type='text' placeholder='Password' value={RPassword} onChange={(e)=>{setRPassword(e.target.value)}} /><br/>
                <button className='btn btn-primary' onClick={RegisterMe}>Sign Up</button>
            </div>
        </div>
    </div>
}
export default Registration
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import '../../ComponentStyles/SignUpMain.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

import {MessageProvider} from '../../MessageContext'


function SignUpMainPage() {

    const[allDBData,setAllDBData]  = useState([])
    const dataObj = useContext(MessageProvider)

    //keep check that new users should not keep existing username/email
    useEffect(()=>{
        const url='http://localhost:5000/checkExistingCredentials'

        axios.post(url).then((res)=>{
            console.log(res.data) 
            setAllDBData(res.data)

        }).catch((err)=>{
            console.log(err)
        })    
    },[])
    
    const[username,setUsername] = useState('')
    const[email,setEmail] = useState('')
    const[pass,setPass] = useState('')
    const[confirmPass,setConfirmPass] = useState('')
    const[isChecked,SetIsChecked] = useState(false)

    const history = useHistory()
    
    function processRegistration(e) {
        e.preventDefault()
        console.log(allDBData)
        // alert(`${username} ${email} ${pass} ${confirmPass}`)
        alert(`${username} ${email} ${pass} ${confirmPass} ${isChecked}`)
        if(username.length > 0 && email.length > 0 && pass.length > 0 && confirmPass.length > 0
             && isChecked === true && pass === confirmPass ){
            
            //username should not contain @ to differ from username and email

                const unique_email = allDBData.forEach(function(existing_email,idx){
                    if(existing_email !== email){
                        // console.log('existing_email true')
                        return true
                        
                    }
                    else if(idx === allDBData.length-1){
                        // console.log('existing_email false')
                            return false
                    }
                    else{}
                    
                })

                

            if(username.includes('@') || unique_email === false){
                alert('email or @ Recheck form')
            } 
            
            else{
                //save user details to DB
                const url = 'http://localhost:5000/registerUsers'
                const data = {'username':username,'email':email,'password':pass}
                axios.post(url,data)
                .then((res)=>{
                    // console.log('this is res')
                    // console.log(res)
                    dataObj.getLoggedinEmail(email)
                }).catch((err)=>{
                    console.log(err)
                })
                alert('all ok')
                //got to dashboard
                localStorage.setItem('loggedin',true)
                dataObj.getLoggedStatus()
               
                history.push('/dashboard')

            }
        } 
        else{
            alert('last Recheck form')
        }
    }
   

    return <div className="Signup-Container">
        <h2>Sign up Main</h2>
        <form className="SignUp Form">
            <div className="form-group">
                {/* <label for="exampleInputEmail1">Username</label> */}
                <input type="text" className="form-control SignUp-field" placeholder="Name" 
                required onChange={(e)=>{setUsername(e.target.value)}}/>   
            </div>

            <div className="form-group">
                {/* <label for="exampleInputEmail1">Email address</label> */}
                <input type="email" className="form-control SignUp-field" placeholder="Enter Email"
                 required onChange={(e)=>{setEmail(e.target.value)}} />   
            </div>
            
            <div className="form-group">
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input type="password" className="form-control SignUp-field" placeholder="Password"
                 required onChange={(e)=>{setPass(e.target.value)}}/>
            </div>

            <div className="form-group">
                {/* <label for="exampleInputPassword1">Confirm Password</label> */}
                <input type="password" className="form-control SignUp-field" placeholder="Confirm Password"
                 required onChange={(e)=>{setConfirmPass(e.target.value)}}/>
            </div>
            
            <div className="form-group form-check">
                
                <input type="checkbox" className="form-check-input" required 
                onChange={(e)=>{SetIsChecked(!isChecked)}} />   
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>

            <button type="submit" className="btn btn-primary" onClick={processRegistration}>Submit</button>
            </form>
    </div>
}
export default SignUpMainPage
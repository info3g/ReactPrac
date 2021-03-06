import React, { useContext, useState } from 'react'
import '../../ComponentStyles/LoginMainPage.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import swal from 'sweetalert2'
import {MessageProvider} from '../../MessageContext'

function LoginMainPage(){
    //in username variable, user can enter either email or username so we will be checking for both. 
    const[username,setUsername] = useState('')
    const[pass,setPass] = useState('')
    const dataObj = useContext(MessageProvider)

    const history = useHistory()

    function processLogin(e) {
        e.preventDefault()
        //check for all records in db to match the credentials
        const url = 'http://localhost:5000/authenticateUsers'
        //username will have email of the user, that is handled in backend
        const data = {'email':username,'password':pass}
        axios.post(url,data).then((res)=>{
                console.log(res)
                if(res.data.length !== 0){
                    // dataObj.getLoggedStatus(true)
                    localStorage.setItem('loggedin',true)
                    dataObj.getLoggedStatus()
                    // console.log(res.data[0].email)
                    dataObj.getLoggedinEmail(res.data[0].email)
                    history.push('/dashboard')
                }
                else{
                    swal.fire('Oops...','Wrong Credentials','error')
                }
                console.log(res.data.length)
        }).catch((err)=>{
            console.log(err)
        })
    }

    return <div className="login-conatainer">
        <h2>Login Here</h2>
        <form className="login Form">
            <div className="form-group">
                {/* <label for="exampleInputEmail1">Username</label> */}
                <input type="text" className="form-control login-field" placeholder="Username or Email" 
                required onChange={(e)=>{setUsername(e.target.value)}}/>   
            </div>
            
            <div className="form-group">
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input type="password" className="form-control login-field" placeholder="Password"
                 required onChange={(e)=>{setPass(e.target.value)}}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={processLogin}>Submit</button>
        </form>    
    </div>
}
export default LoginMainPage
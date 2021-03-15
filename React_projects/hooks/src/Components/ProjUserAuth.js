import React,{useState} from 'react'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert'
function ProjUserAuth(){

    const[username,setUsername]=useState('')
    const[password,setpassword]=useState('')

    function AfterSubmission(event) {
        event.preventDefault() //So that the form doesn't reload
        const userDetails ={
            username:username,
            password:password
        }

        if(username === 'React' && password === 'udemy'){
            swal('Login successful','','success')

        }
        else{
            swal('Login Failed','','error')
        }
    }


    return <div>
        <h1>User authentication</h1>
        <form>
            <input type="text" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}} required />
            <br/>
            <input type="password" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} required />
            <br/>
            {/* <input type='submit' value='login' /> */}
            <button className='btn btn-primary' onClick={AfterSubmission}>Login</button>
        </form>
    </div>
}
export default ProjUserAuth
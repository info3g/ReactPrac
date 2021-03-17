import React,{useState} from 'react'

function MulitpleLocalStorage(){


    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    
    function setLocal(){
        let allCredentials=JSON.parse(localStorage.getItem('cred') || "[]") // this converts strings to obj and in first time empty array is passed because there is no key as "credentials"

        let credentials = {
            'username':username,
            'password':password
        }
        allCredentials.push(credentials)
        localStorage.setItem('cred',JSON.stringify(allCredentials)) // converts credentials obj to string
        
        alert(allCredentials[0].username)
    }
    


    return <div>    
        <h1>MulitpleLocalStorage</h1>
        
        <input type='text' placeholder='usernamea' value={username} onChange={(e)=>{setUsername(e.target.value)}}   />
        <input type='text' placeholder='pass' value={password} onChange={(e)=>{setPassword(e.target.value)}}   />
        <button onClick={setLocal}>Click here</button>
        {/* <h1>Value is </h1> */}
    </div>
}
export default MulitpleLocalStorage
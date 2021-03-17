import React,{useState} from 'react'

function LocalStorage(){


    const[username,setUsername]=useState('')

    function setLocal(){
        localStorage.setItem('name',username)
    }

    return <div>    
        <h1>hello</h1>
        
        <input type='text' placeholder='usernamea' value={username} onChange={(e)=>{setUsername(e.target.value)}}   />
        <button onClick={setLocal}>Click here</button>
        <h1>Value is {localStorage.getItem('name')}</h1>
    </div>
}
export default LocalStorage
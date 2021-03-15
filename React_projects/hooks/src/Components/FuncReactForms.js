import React,{useState} from 'react'

function FuncReactForms(){

    const[username,setUsername]=useState('') //empty string because input should be empty at first

    function getValue(){
        // alert({username})
        alert(username)
    }

    return <div>
        <h1>Forms</h1>
        <form action="">
            <input type="text" placeholder='Username' value={username} onChange={(e)=>{setUsername(e.target.value)}} />
            <button onClick={getValue}>Clik me </button>
        </form>
    </div>
}

export default FuncReactForms
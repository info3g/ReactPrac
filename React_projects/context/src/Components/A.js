import React,{useContext, useState} from 'react'
import {Moviesprovider} from '../Moviescontext'

function A(){
    const obj=useContext(Moviesprovider)
    const[dir,setDir]=useState('')
    function Change(){
        // alert(dir)
        obj.changeDirector(dir)//whatever the value of input field that is sent as parameter to the change director function in movie context.js
    }
    return <div>
        <h1>this is A</h1>
        <h2>Movie is {obj.movie}</h2>
        <input type='text' placeholder='send dir name' value={dir} onChange={(e)=>{setDir(e.target.value)}} />
        <button onClick={Change}>Change Director name</button>

    </div>
}
export default A
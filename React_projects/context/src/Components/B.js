import React,{useContext, useState} from 'react'
import {Moviesprovider} from '../Moviescontext'
function B(){
    const obj = useContext(Moviesprovider)
    const[mov,setMovie] = useState('')
    function change(){
        obj.changeMovie(mov)//whatever the value of input field that is sent as parameter to the change movie function in movie context.js
    }

    return <div>
        <h1>this is B</h1>
        <h2>Director is {obj.director}</h2>
        <input type="text" placeholder='change movie name' value={mov} onChange={(e)=>{setMovie(e.target.value)}}/>
        <button onClick={change}>Change movie name</button>
    </div>
}
export default B
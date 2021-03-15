import React,{useState} from 'react'

function UseStateHook(){

    // const[player,setPlayer] = useState('Vijay') 
    const[numbers,setnumbers] = useState([1,2,3,4,5])

    function ChangePlayer(){
        // setPlayer('Nikhil')
        setnumbers([6,7,8,9])
    }

 return <div>
     <h1>player name is {numbers}</h1>
     <button onClick={ChangePlayer}>Click here</button>
 </div>
}

export default UseStateHook


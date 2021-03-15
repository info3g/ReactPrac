import React,{useState} from 'react'
import '../ComponentStyles/HooksManipulation.css'
function UseEffectHook(){

    const[class_name,setClass_name]=useState('beforeEffect')

    function ChangeClassName(){
        setClass_name('afterEffect')
    }

    return <div>
        <h1 className={class_name}>Manipulation</h1>
        <button onClick={ChangeClassName}>Click here</button>
    </div>
}

export default UseEffectHook
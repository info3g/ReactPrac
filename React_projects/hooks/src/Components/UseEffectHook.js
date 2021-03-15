import React, {useEffect,useState} from 'react'

function UseEffectHook(){

    const[language,setLanguage]=useState('python')


    useEffect(()=>{
        setLanguage('React')
    },[])

    return <div>
        <h1>UseEffectHook   {language}</h1>
    </div>
}

export default UseEffectHook
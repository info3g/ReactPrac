import React from 'react'
import axios from 'axios'
function Axios() {

    function getAxios(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    }

    return <div>
        <button onClick={getAxios}>Axios get data</button>
    </div>
}
export default Axios
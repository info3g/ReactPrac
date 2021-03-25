import React, { useState } from 'react'
import axios from 'axios'

function HTMLUsingAxios() {

    const [datas,setData] = useState([])

    function getDataAxiosHTML(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((res)=>{
            setData(res.data) // datas is assigned res.data
            console.log(datas)
        }).catch((error)=>{
            console.log(error)
        })
    }

    const titles = datas.map((item,idx)=>{
        return <div>
            <h1>{item.id}  {item.name}</h1>
        </div>
    })

    return <div>
        <button onClick={getDataAxiosHTML}>get Data Axios HTML</button>
        {titles}
    </div>

}
export default HTMLUsingAxios
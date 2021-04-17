import React, { useEffect, useState } from 'react'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
function ContactsPanel() {
    // const[names,setNames] = useState('')
    const [allData,setallData] = useState([])

    useEffect(()=>{
        const data = {'name':''}
        const url='http://localhost:5000/getnames'

        axios.post(url,data)
        .then((res)=>{
            
            setallData(res.data)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    })



    function getNames(e) {
        // setNames(e.target.value)
        // console.log(names)
        const search_name = e.target.value
        console.log(search_name)
        const data = {'name':search_name}
        const url='http://localhost:5000/getnames'

        axios.post(url,data)
        .then((res)=>{
            
            setallData(res.data)
            
        })
        .catch((err)=>{
            console.log(err)
        })


    }

    console.log(allData)

    const extracted_data = allData.map((val,idx)=>{
        // console.log(val.name)
        return <div>
            <p>{val.name}</p>
        </div>
    })

    return <div>
        <h1>ContactsPanel</h1>
            <div className='dp-bar'>
                <h1>DP and Icons</h1>
            </div>
            <div className='form-outline search-bar'>
                <input type="search" className="form-control" placeholder="Search" aria-label="Search"
                 onChange={getNames} />
            </div>
            <div className='contacts-bar'>{extracted_data}</div>   
    </div>
}
export default ContactsPanel
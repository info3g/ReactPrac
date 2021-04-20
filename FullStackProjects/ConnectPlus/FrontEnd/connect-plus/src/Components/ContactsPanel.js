import React, { Component, useContext, useEffect, useRef, useState } from 'react'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import ChatPanel from '../Components/ChatPanel'
import Chat from '../Pages/Chat'
import {MessageProvider} from '../MessageContext'

function ContactsPanel() {
    // const[names,setNames] = useState('')
    // console.log('render')
    const [allData,setallData] = useState([])
    const dataObj = useContext(MessageProvider)
    const contactDiv = useRef()

    useEffect(()=>{
        
        if(extracted_data.length===0){
            // console.log('in 0')
            // console.log('api hit')
        const data = {'name':''}
        const url='http://localhost:5000/getnames'

        axios.post(url,data)
        .then((res)=>{
            
            setallData(res.data)
            
        })
        .catch((err)=>{
            console.log(err)
        })
        }
        else{

        }

    },[]) // empty brackets so that use effect is called only once, otherwise it's called after every render.



    function getNames(e) {
        // console.log('api hit')
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
        return <div className='contactsContainer' ref={contactDiv} >
            {/* <p id={`idx-${idx}`} className={idx} onClick={contactName} >{val.name}</p> */}
            <BrowserRouter>
            
            <Link to={val.name}><p id={`idx-${idx}`} className={val.name} onClick={contactName}  >{val.name}</p></Link>
            <Route path={val.name} exact />
            
            </BrowserRouter>
        </div>
    })

    

    function contactName(e) {
        dataObj.getContactsUrl(e.target.className)
        console.log(e.target.className)
         
    }
  
    
    

    return <div>
        <h1>ContactsPanel</h1>
            <div className='dp-bar'>
                <h1>DP and Icons</h1>
            </div>
            <div className='form-outline search-bar'>
                <input type="search" className="ContactPanel form-control" placeholder="Search" aria-label="Search"
                 onChange={getNames} />
            </div>
            

                <div className='contacts-bar'>{extracted_data}</div>   
            
    </div>
}
export default ContactsPanel
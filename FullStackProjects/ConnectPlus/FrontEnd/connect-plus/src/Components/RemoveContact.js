import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {MessageProvider} from '../MessageContext'

function RemoveContact() {
    //This should have contacts of the logged in person only and not all the contacts
    const dataObj = useContext(MessageProvider)
    const [] = useState()

    useEffect(()=>{
        const url = 'http://localhost:5000/registered-users-data'

        axios.post(url)
        .then((res)=>{
            console.log(res)

        }).catch((err)=>{
            console.log(err)
        })
    },[])




    return <div>
        Remove contact
    </div>
}
export default RemoveContact
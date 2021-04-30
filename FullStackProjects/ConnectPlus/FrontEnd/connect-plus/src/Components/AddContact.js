import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import '../ComponentStyles/AddContact.css'
import {MessageProvider} from '../MessageContext'
import Swal from 'sweetalert2'

function AddContact() {
    const [retrievedData,setRetrievedData] = useState([])
    const [enteredEmail,SetEnteredEmail] =useState('')
    const dataObj = useContext(MessageProvider)
    useEffect(()=>{

        const url = 'http://localhost:5000/checkExistingCredentials'

        axios.post(url)
        .then((res)=>{
            // console.log('Add contacts call')
            // console.log(res.data)
            setRetrievedData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    //add contact if it is a valid registered user in DB
    function AddValidUsers(e) {
        e.preventDefault()
        // console.log('inside Addvalid users')
        // console.log(retrievedData)
        // console.log(enteredEmail)
        for(let i=0;i<retrievedData.length;i++){
            if(retrievedData[i].email === enteredEmail && dataObj.loggedinEmail !== enteredEmail) {
                //Addd this user to db in new table

                Swal.fire('Congrats',"User added",'success')
               
                break
                
            }
            else if(i === retrievedData.length -1){
                Swal.fire('Oops',"User doesn't exists",'error')
                
                
            }
            else{}
        }
        
    }

    return <div>
       <form>
           <h2>Add New Contacts</h2>
        <div class="form-group add-contact">
            
            <input type="email" class="form-control dashboard-add-contact"
             placeholder="Enter email of contact you want to add" onChange={(e)=>{SetEnteredEmail(e.target.value)}}  />
            
        </div>
        
        <button type="submit" class="btn btn-primary" onClick={AddValidUsers}>Add</button>   
       </form>
    </div>
}
export default AddContact
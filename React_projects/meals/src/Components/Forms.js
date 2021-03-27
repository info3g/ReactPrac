import React, { useState } from 'react'
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com'
import '../ComponentStyles/Forms.css'
import Swal from 'sweetalert2'
function Forms(params) {

    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[feedback,setFeedback] = useState('')

    function sendMessage(event) {
        event.preventDefault()
        console.log(name)
        console.log(email)
        console.log(feedback)

        const templateparams ={
            from_name : name,
            to_name: 'Nikhil',
            messsage: feedback,
            from_email:  email
        }
        //emailjs.send(serviceID, templateID, templateParams, userID); import{ init } from 'emailjs-com'; to use userID this import is necessary 
        emailjs.send("service_q3wythf",'template_zeo7xnl',templateparams,"user_FainTEpiMarrw4q2Zaqj7")
        .then((res)=>{
            Swal.fire('Thanks', 'Your email has been sent!!', 'success')
        }).catch((err)=>{
            Swal.fire('Oops....','Message was not sent','error')
        })
        
    }




    return <div>
        <form className='Contact-form'>
            <div class="form-group">
                <label for="exampleFormControlInput1">Your Name</label>
                <input type="text" className="form-control"  placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Your Email address</label>
                <input type="email" className="form-control"  placeholder="name@example.com" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Feedback</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={feedback} onChange={(e)=>{setFeedback(e.target.value)}} ></textarea>
            </div>
            <input type="button" value='Submit' className='btn btn-primary' onClick={sendMessage}/>
        </form>
    </div>
}
export default Forms
import React,{useEffect, useState} from 'react'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../ComponentStyles/NavbarStyle.css'
function Navbar(){

    const[LUsername,setLUsername]=useState('')
    const[LPassword,setLPassword]=useState('')


    return <div className='Navbar-header'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1>FACEBOOK</h1>
                </div>
                <div className='col-md-6 login'>
                    <input type='text' placeholder='Username' value={LUsername} onChange={(e)=>{setLUsername(e.target.value)}}/>
                    <input type='text' placeholder='Password' value={LPassword} onChange={(e)=>{setLPassword(e.target.value)}}/>
                    <button className='btn btn-primary'>LOGIN</button>
                </div>
            </div>
    </div>

}
export default Navbar
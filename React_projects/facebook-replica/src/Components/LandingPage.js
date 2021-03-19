import React from 'react'
import Navbar from './Navbar'
import Registration from './Registration'
import {BrowserRouter, Route} from 'react-router-dom'
import HomePage from './HomePage'
import Contact from './Contact'

function LandingPage(){

    function handlecallback(credentials){
        console.log(credentials)

    }

    return <div>
        
        <BrowserRouter>
         <Navbar/>
         {/* <Registration/> */}
         <Route path='/' component={Registration} exact/>
         {/* <Route path='/home' component={HomePage} exact /> */}
         {/* <Route path='/contact' component={Contact} exact/> */}
        </BrowserRouter>
    </div>
}
export default LandingPage
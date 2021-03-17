import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
// import Contactus from '../Components/Contactus'
import Home from '../Components/Home'
import Services from '../Components/Services'
import Contactus from '../Components/Contactus'
function LandingPage(){
    return <div>
            <h1>React Components</h1>
           
            <BrowserRouter>
                <ul>
                    <Link to='/home'><li>Home</li></Link>
                    <Link to='/services'><li>Service</li></Link>
                    <Link to='/contact-us'><li>Contact Us</li></Link>
                    
                </ul>
                <Route path='/home' component={Home} exact />
                <Route path='/services' component={Services} exact/>
                <Route path='/contact-us' component={Contactus} exact />
                
            </BrowserRouter>
            {/* <Home/>
            < Services />
            < Contactus /> */}
    </div>
}
export default LandingPage
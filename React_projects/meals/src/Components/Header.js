import React from 'react'
import {Link} from 'react-router-dom'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../ComponentStyles/Footer.css'
function Header() {
     return <div>
            <nav className='navbar navbar-inverse'>
                <div className='container-fluid'>
                    <Link to='/'>React Meals</Link>
                
                <ul className='nav navbar-nav'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/order'><li>Order</li></Link>
                    <Link to='/contact-us'><li>Contact</li></Link>
                </ul>

                </div>
            </nav>
     </div>
}
export default Header
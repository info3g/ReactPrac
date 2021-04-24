import React from 'react'
import {Link} from 'react-router-dom'
import '../../ComponentStyles/Header.css'
function Header() {
    return <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="collapse navbar-collapse" >
                <ul class="navbar-nav mr-auto">
                <Link to="/"><li class="nav-item active">Home</li></Link>
                <div className="header-register">
                    <Link to="/login"><li class="login-point active">Login</li></Link>
                    <Link to="/signup"><li class="signup-point active">Sign Up</li></Link>
                </div>
                {/* <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li> */}
                </ul>
                
            </div>
        </nav>
    </div>
}
export default Header
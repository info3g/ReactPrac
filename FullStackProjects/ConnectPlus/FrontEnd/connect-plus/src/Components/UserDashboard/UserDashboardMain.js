import React from 'react'
import '../../ComponentStyles/UserDashboardMain.css'
import { Link } from "react-router-dom";

function UserDashboardMain() {
    return <div>
     <div class="sidenav">
     <Link to='/dashboard/add-contact'>Add Contact</Link>    
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#clients">Clients</a>
    <a href="#contact">Contact</a>
  </div>
  
  <div class="main">
    <h2>Sidebar</h2>
    <p>This sidebar is of full height (100%) and always shown.</p>
    
  </div>
  </div>
}
export default UserDashboardMain
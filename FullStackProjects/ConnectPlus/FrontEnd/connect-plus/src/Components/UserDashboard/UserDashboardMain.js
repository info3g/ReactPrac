import React from 'react'
import '../../ComponentStyles/UserDashboardMain.css'
import { Route,Link } from "react-router-dom";
import AddContact from '../AddContact';
import UserDashboardSidenav from '../UserDashboardSidenav'
import RemoveContact from '../RemoveContact'


function UserDashboardMain() {
  
  if (window.location.pathname === '/dashboard/add-contact') {
    return <div>
      <UserDashboardSidenav />
      <div class="main">
        <AddContact />
    </div>
    </div>
  }

  else if (window.location.pathname === '/dashboard/remove-contact') {
    return <div>
        <UserDashboardSidenav />
        <div class="main">
        <RemoveContact />
    </div>
    </div>
  }

 

  else{
    return <div>
      <UserDashboardSidenav />
    </div>
  }
 
 
}
export default UserDashboardMain
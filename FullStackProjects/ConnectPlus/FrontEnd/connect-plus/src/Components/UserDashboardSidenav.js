import React, { useContext } from 'react'
import '../ComponentStyles/UserDashboardSidenav.css'
import { Link } from "react-router-dom";
import { MessageProvider } from "../MessageContext";

function UserDashboardSidenav() {
    const dataObj  = useContext(MessageProvider)
    return <div>
    <div class="sidenav">
        <p>logged in as {dataObj.loggedinEmail}</p>
        <Link to='/dashboard/add-contact'>Add Contact</Link>  
        <Link to='/dashboard/remove-contact'>Remove Contact</Link>
        {/* <Link to='/dashboard/delete-contact'>Delete Contact</Link> */}
    </div>
 </div>


   
}
export default UserDashboardSidenav
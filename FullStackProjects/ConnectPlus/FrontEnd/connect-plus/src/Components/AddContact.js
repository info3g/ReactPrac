import React from 'react'
import '../ComponentStyles/AddContact.css'


function AddContact() {
    return <div>
       <form>
        <div class="form-group add-contact">
            
            <input type="email" class="form-control dashboard-add-contact" placeholder="Enter email of contact you want to add"/>
            
        </div>
        
        <button type="submit" class="btn btn-primary">Add</button>   
       </form>
    </div>
}
export default AddContact
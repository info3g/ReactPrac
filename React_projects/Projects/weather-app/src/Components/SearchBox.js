import  React  from "react";
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../ComponentsStyle/SearchBox.css'
function SearchBox(params) {
    return <div>
        <div className='Container'>
            <div className='search-box'>
                <input type="email" className="form-control"  placeholder="Search Country"/>    
            </div>
            <div className='search-btn'>
                <button className='btn btn-primary'>Search</button>
            </div>
        </div>
        
        
        
    </div>
}
export default SearchBox

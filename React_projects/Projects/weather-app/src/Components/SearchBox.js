import  React  from "react";
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../ComponentsStyle/SearchBox.css'
import axios from 'axios'
// import '../../../../../Nodejs Prac/Api_hit/api_hit'
function SearchBox(params) {


    function getClimate() {
        const url='http://localhost:5000/api'
        axios(url)
        .then((res)=>{
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)
        })
            
    }

    return <div>
        <div className='Container'>
            <div className='search-box'>
                <input type="email" className="form-control"  placeholder="Search Country"/>    
            </div>
            <div className='search-btn'>
                <button type='submit' className='btn btn-primary' onClick={getClimate}>Search</button>
            </div>
        </div>
 
    </div>
}
export default SearchBox

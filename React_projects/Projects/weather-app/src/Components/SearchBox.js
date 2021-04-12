import  React, { useContext, useState }  from "react";
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../ComponentsStyle/SearchBox.css'
import axios from 'axios'
import {weatherprovider} from '../WeatherContext'
// import '../../../../../Nodejs Prac/Api_hit/api_hit'


function SearchBox(params) {
    
    const dataObj  = useContext(weatherprovider)
    // dataObj.getMesssage()
    const[country,setCountry]=useState('')
    const[range,setRange] = useState(5)
    function getClimate() {
       
        const data = {'countryName':country} 
        axios.post('http://localhost:5000/climate',data)
        .then((res)=>{
            console.log(res.data.list)
            dataObj.allWeatherData(res.data.list)
        }).catch((error)=>{console.log(error)})

        dataObj.getcountryName(country)
        dataObj.getRange(range)
        // console.log(`country is ${country}`)
     
            
    }

    return <div>
        <div className='Container'>
            <div className='search-box'>
                <input type="text" className="form-control"  placeholder="Search Country" required
                 value={country} onChange={(e)=>{setCountry(e.target.value)}}/>    

                 <input type="text" className="form-control Range" placeholder=" default count 5" value={range}
                 onChange={(e)=>{setRange(e.target.value)}} />
            </div>
            <div>
                
            </div>
            <div className='search-btn'>
                <button type='submit' className='btn btn-primary' onClick={getClimate}>Search</button>
            </div>
            
            
        </div>
 
    </div>
}
export default SearchBox

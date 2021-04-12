import React, { useContext } from 'react'
import InfiniteCarousel from 'react-leaf-carousel'
import images_a from '../images/a.jpg'
import images_b from '../images/b.jpg'
import images_c from '../images/c.jpg'
import images_d from '../images/d.jpg'
import images_e from '../images/e.jpg'
import images_f from '../images/f.jpg'
import {weatherprovider} from '../WeatherContext'
// import Carousel from 'react-elastic-carousel';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"


function CarouselFunction() {

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3 // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2 // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1 // optional, default to 1.
  //   }
  // };


    const dataObj = useContext(weatherprovider)
   
    const weatherReport=[]
    const range = dataObj.range 
    dataObj.allData.map((val,idx) => {
      const iconcode = val.weather[0].icon
      const image = "http://openweathermap.org/img/w/" + iconcode + ".png"
      const tempCelcius = Math.round(val.main.temp - 273.15)
      // console.log(idx)
      if(range==0){
        console.log(123)
        weatherReport.push(<h1>Selected Range was Zero</h1>)
        if(idx!==0){
          weatherReport.splice(1,1)
        }
        else{

        }
      }
      else if(idx<range){
        weatherReport.push(
          
          <div key={idx} className='weatherCards'>
            <h6>{val.dt_txt}</h6>
            <img src={image} alt=""/>
            <h4>{tempCelcius} °C</h4>
            <p>{val.weather[0].main}</p>
            {/* <li key={idx}>{val.main.temp_kf}</li> */}

          </div>
      )
      }
      else{
        
      }
            
      
      
    })
      
    return <div className='weatherInfo'>
            <h1>{dataObj.countryName.toUpperCase()}</h1>
            {weatherReport}
          </div>
}
export default CarouselFunction
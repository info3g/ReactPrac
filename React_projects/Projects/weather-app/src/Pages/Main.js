import React from 'react'
import CarouselFunction from '../Components/CarouselFunction'
import Header from '../Components/Header'
import images from '../images/a.jpg'
import SearchBox from '../Components/SearchBox'
import WeatherContext from '../WeatherContext'
function Main() {
    return <div>
        <WeatherContext>
        <Header/>
        
        {/* <img src={'images/a.jpg'} alt="a"/> */}
        <SearchBox/>
        <CarouselFunction/>
        </WeatherContext>
    </div>
}
export default Main 
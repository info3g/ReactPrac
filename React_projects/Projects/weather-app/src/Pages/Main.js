import React from 'react'
import Carousel from '../Components/Carousel'
import Header from '../Components/Header'
import images from '../images/a.jpg'
import SearchBox from '../Components/SearchBox'
function Main() {
    return <div>
        <Header/>
        
        {/* <img src={'images/a.jpg'} alt="a"/> */}
        <SearchBox/>
        <Carousel/>
    </div>
}
export default Main 
import React, { useContext } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {mealsProvider} from '../MealsContext'
import { useHistory } from 'react-router'
import '../ComponentStyles/Checkout.css'
function Checkout() {
   
    const history = useHistory()
    const dataObj = useContext(mealsProvider) 
    // console.log(dataObj)
    function goToHome() {
        history.push('/')
    }

    return <div>
        <Header/>
        { // ternery operator condition? yes:No
            dataObj.orderQuant==1 ?
            <h1>your {dataObj.orderQuant} plate {dataObj.orderDetails.order_desc} is being cooked.</h1>
            :<h1>your {dataObj.orderQuant} plates {dataObj.orderDetails.order_desc} is being cooked.</h1>
            
        }
        {/* <h1>your {dataObj.orderQuant} plates {dataObj.orderDetails.order_desc} is being cooked.</h1> */}
        <h2>thankyou for ordering.</h2>
        <button className='Menu-btn' onClick={goToHome}>Go to Menu</button>
        <Footer/>
    </div>
}
export default Checkout
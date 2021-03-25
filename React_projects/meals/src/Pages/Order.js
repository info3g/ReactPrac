import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import axios from 'axios'
import {mealsProvider} from '../MealsContext'
import {useHistory} from 'react-router-dom'
import '../ComponentStyles/Order.css'

function Order() {  

    const dataObj = useContext(mealsProvider)
    const [quantity,setQuantity] = useState(1)
    
    const history = useHistory()
    
        function addQuant() {
            setQuantity(quantity+1)
        }

        function subtQuant() {
            if(quantity<=1){
                
            }
            else{
                setQuantity(quantity-1)
            }
            
        }
    
        function placeOrder() {
            dataObj.updateOrderQuant(quantity)
            history.push('/checkout')
        }


    return <div>
        <Header/>
        <h1>This is Order</h1>
        <div className='row'>
            <div className='col-md-6'>
                <img src={dataObj.orderDetails.img_src} alt="NO Order Image"/>
            </div>
            <div className='col-md-6'>
                <h2>{dataObj.orderDetails.order_desc}</h2>
                <div className='quantity'>
                    <button className='quant-button' onClick={subtQuant}>-</button>
                    <span className='quantity_count'>{quantity}</span>
                    <button className='quant-button' onClick={addQuant}>+</button>
                </div>
                {/* <h3>Quantity is: {quantity}</h3> */}
                <button className='place-order-button' onClick={placeOrder}>Place Order</button>
            </div>
        </div>
        
        
        <Footer/>
    </div>
      
}
export default Order
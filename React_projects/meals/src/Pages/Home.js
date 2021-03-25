import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import axios from 'axios'
import '../ComponentStyles/Home.css'
import {mealsProvider} from '../MealsContext'
import {Link, useHistory} from 'react-router-dom'
function Home() {

    const dataObj = useContext(mealsProvider)
    // console.log(dataObj)
    const[mealsData,SetmealsData] = useState([])
    const[order,setOrder] = useState('aas')

    const history = useHistory()

    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((res)=>{
            SetmealsData(res.data.meals)
        }).catch((error)=>{
            console.log(error)
        })
       
    },[])

    function getOrder(e) {
        let orderAttr={
            id: '',
            img_src:'',
            order_desc:''
        }

        orderAttr.id = e.target.parentElement.className.split(' ')[0]
        orderAttr.img_src = e.target.parentElement.childNodes[0].src
        orderAttr.order_desc = e.target.parentElement.childNodes[1].innerHTML

        dataObj.orderDetailsFunc(orderAttr)
        console.log(orderAttr)
        history.push('/order')
        
    }
    // useEffect(()=>alert('from Home '+order),[order])    

    


    
    const AllMeals = mealsData.map((meal,idx)=>{
        return <div className={meal.idMeal+' col-md-4'}>
                <img src={meal.strMealThumb} alt='No img' />
                <p>{meal.strMeal}</p>
             {/* <Link to='/order'><button onClick={getOrder}>Order Now</button></Link> */}
             <button className='Order-btn' onClick={getOrder}>Order Now</button>
             
           
        </div>
    })

    // setA(e.target.id)


    return <div>
                    <Header/>
                    <h1>This is Home</h1>
                    {/* <button onClick={getAllData}>Click</button> */}
                    <div className='row'>
                    {AllMeals}
                    </div>
                    
                    <Footer/>    
    </div>
}
export default Home
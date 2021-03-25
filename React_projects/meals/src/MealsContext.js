import React,{Component, createContext} from 'react'


export const mealsProvider = React.createContext()
class MealsContext extends React.Component{
    constructor(){
        super()
        this.state={
            // orderid: '',
            // orderimg: '',
            // orderDesc: '',
            orderDetails: {},
            orderDetailsFunc: this.orderDetailsFunc,
            orderQuant: 1,
            updateOrderQuant: this.updateOrderQuant

        }
    }

    orderDetailsFunc=(orderAttr)=>{
        this.setState({
            orderDetails:orderAttr
        })
        // alert('Meals Context '+order)
    }
    
    updateOrderQuant=(quantity)=>{
        this.setState({
            orderQuant: quantity
        })
    }



       render(){
           return <mealsProvider.Provider value={{...this.state}}>
               {this.props.children}
           </mealsProvider.Provider>
       } 
}
export default MealsContext
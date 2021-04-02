import React,{Component, createContext} from 'react'


export const CalculatorProvider = createContext()
class CalculatorContext extends React.Component{
    constructor(){
        super()

        this.state={
            btn_value: [0],
            btnValue: this.btnValue
        }
        const value_arr = []
    }
    
    btnValue = (value) =>{
        // value_arr.push(value)
        this.setState({
            btn_value: value
        })
    }


    render(){
        return(
            <CalculatorProvider.Provider value={{...this.state}}>
                {this.props.children}
            </CalculatorProvider.Provider>
        )

    }
} 
export default CalculatorContext
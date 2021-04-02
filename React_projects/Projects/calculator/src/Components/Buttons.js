import React, { useContext, useState } from 'react'
import {CalculatorProvider} from '../CaculatorContext'
import '../ComponentStyle/Button.css'


function Button() {

    const dataObj = useContext(CalculatorProvider)
    function buttonValue(event) {

        // console.log(dataObj.btn_value[0])
        if(dataObj.btn_value[0]===0){
            dataObj.btn_value.pop()
        }
        // if(event.target.innerHTML === 'CE'){
        //     console.log(`sssddcdcsdeded`)
        //     console.log(dum_arr)
            // var val = dum_arr.pop()
            // console.log(`aassdsdsd ${val}`)
        // }
        
        if(event.target.innerHTML === 'Clear' || event.target.innerHTML === 'CE'){
            if(event.target.innerHTML === 'Clear'){
                dum_arr = [0]
            }
            else{
                if(dataObj.btn_value.length === 1){
                    dum_arr=[0]
                }
                else{
                    dataObj.btn_value.pop()
                    dum_arr = dataObj.btn_value
                } 
                
            }
            
        } 

        else{
            var dum_arr = [...dataObj.btn_value,event.target.innerHTML]
        }
        
        // setValue_arr()
        console.log(dum_arr)
        dataObj.btnValue(dum_arr)
    }

    function performOperation(event) {
        var new_arr=[]
        var a=''
        for(let i=0;i<dataObj.btn_value.length;i++){
            if(['+','-','x','÷'].includes(dataObj.btn_value[i])){
                new_arr.push(parseInt(a))
                new_arr.push(dataObj.btn_value[i])
                a=''
            }
            else{
                a+=dataObj.btn_value[i] 
            }
        }
        new_arr.push(parseInt(a))
        console.log(new_arr)

        function recalculateIndex(new_arr){
            var idx = 0
        
            for(let i=0;i<new_arr.length;i++){
                if(Number.isInteger(new_arr[i])){
                    continue
                }
                else if(new_arr.includes('÷')){
                    
                    idx = new_arr.indexOf('÷')
                    
                    
                }
                else if(new_arr.includes('x')){
                    
                    idx = new_arr.indexOf('x')
                    
                }

                else if(new_arr.includes('+')){

                    idx = new_arr.indexOf('+')
                }

                else if(new_arr.includes('-')){

                    idx = new_arr.indexOf('-')
                    
                }
                var sign=new_arr[idx]
                
                return {
                    index: idx,
                    sign:sign

                }

            }
        }    
        
        var res
        var data={}
        while(true){
            data = recalculateIndex(new_arr)
            console.log(data)
            if(new_arr.length === 1){
                console.log(`this is last: ${new_arr}`)
                console.log('out')
                console.log(new_arr.length)
                dataObj.btnValue(new_arr)

                break
            }
            
            else if(data.sign === '÷'){
                
                res = new_arr[data.index-1]/new_arr[data.index+1]
            }
            else if(data.sign === 'x'){
                res = new_arr[data.index-1]*new_arr[data.index+1]
            }
            else if(data.sign === '+'){
                res = new_arr[data.index-1]+new_arr[data.index+1]
            }
            else if(data.sign === '-'){
                res = new_arr[data.index-1]-new_arr[data.index+1]
            }
            
            new_arr[data.index-1] = res
            
            new_arr.splice(data.index,2)
            console.log(`arr curr ${new_arr}`)
            console.log(`this is calculated: ${res}`)
        }
    }


    return <div>
        <table className='all-buttons'>
        <tr className='row'>
                <td className='col-md-3' className='Clear-btn'><button className='btn' onClick={buttonValue}>Clear</button></td>
                <td className='col-md-3'><button className='btn' onClick={buttonValue}>÷</button></td>
                <td className='col-md-3'><button className='btn' onClick={buttonValue}>x</button></td>
                <td className='col-md-3'><button className='btn' onClick={buttonValue}>CE</button></td>
            </tr>
            <tr className='row'>
                <td className='col-md-3' ><button className='btn' onClick={buttonValue}>7</button></td>
                <td className='col-md-3'><button className='btn' onClick={buttonValue}>8</button></td>
                <td className='col-md-3' ><button className='btn' onClick={buttonValue}>9</button></td>
                <td className='col-md-3'><button className='btn' onClick={buttonValue}>-</button></td>
            </tr>

            <tr className='row'>
                <td className='col-md-3' ><button className='btn' onClick={buttonValue}>4</button></td>
                <td className='col-md-3'><button className='btn' onClick={buttonValue}>5</button></td>
                <td className='col-md-3' ><button className='btn' onClick={buttonValue}>6</button></td>
                <td className='col-md-3'><button className='btn' onClick={buttonValue}>+</button></td>
            </tr>

            <tr className='row'>
                <td className='col-md-3' ><button className='btn' onClick={buttonValue}>1</button></td>
                <td className='col-md-3'><button className='btn' onClick={buttonValue}>2</button></td>
                <td className='col-md-3' ><button className='btn' onClick={buttonValue}>3</button></td>
                <td className='col-md-3'><button className='btn' onClick={performOperation}>=</button></td>
            </tr>

            
        </table>
    </div>
}
export default Button
import React, { useContext } from 'react'
import { CalculatorProvider } from '../CaculatorContext'
function Display(params) {

    const dataObj = useContext(CalculatorProvider)


    return <div>
        <h1>{dataObj.btn_value}</h1>
    </div>
}
export default Display
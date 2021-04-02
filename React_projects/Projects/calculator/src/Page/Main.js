import React from 'react'
import Button from '../Components/Buttons'
import Display from '../Components/Display'
import CalculatorContext from '../CaculatorContext'
function Main() {
    return <div>
        <CalculatorContext>
            <Display/>
            <Button/>
        </CalculatorContext>
    </div>
}
export default Main
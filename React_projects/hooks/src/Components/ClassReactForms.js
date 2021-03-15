import React, {Component} from 'react'

class ClassReactForms extends React.Component{
    constructor(){
        super()

        this.state={
            password:''
        }
    }

    ChangeValue=()=> {
        alert(this.state.password)
    }

    render(){
        return <div>
             <h1>Class Forms</h1>
             <input type='text' placeholder='password' value={this.state.password}
              onChange={(e)=>{this.setState({password:e.target.value})}} />
             <button onClick={this.ChangeValue}>Click here</button>
            </div>
    }
} 

export default ClassReactForms
import React,{Component} from 'react'


class CounterApp extends React.Component{
    constructor(){
        super()

        this.state={
            count:0
        }
    }
      
    addfunc=()=>{
        this.setState({
            count:this.state.count+=1
        })
    }

    subtractfunc=()=>{
        this.setState({
            count:this.state.count-=1
        })
        
    }


    render(){
        return <div>
            <h1>Counter program</h1>
            <h1>{this.state.count}</h1>
            <button onClick={this.addfunc}>Add</button>
            <button onClick={this.subtractfunc}>Subtract</button>
        </div>
    }
}
export default CounterApp
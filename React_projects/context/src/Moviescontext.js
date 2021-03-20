import React, {Component} from 'react'

export const Moviesprovider = React.createContext()


class Moviescontext extends React.Component{
    constructor(){
        super()

        this.state={
            movie:'Avengers',
            director: 'Nolan',
            changeMovie: this.changeMovie,
            changeDirector:this.changeDirector
        }
    }

    changeMovie=(movi)=>{
        this.setState({
            movie:movi
        })
    }

    changeDirector=(diri)=>{
        this.setState({
            director:diri
        })
    }


 render(){
    //  to send all the data in value
     return <Moviesprovider.Provider value={{...this.state}}>
         {/* so that all the children can access the data */}
         {this.props.children} 
     </Moviesprovider.Provider>
 }
}

export default Moviescontext
import React,{Component} from 'react'

export const Moviesprovider = React.createContext()

class MoviesContext extends React.Component{
    constructor(){
        super()

        this.state={
            count: 0,
            movie_list: [],
            add_count: this.add_count,
            display_movie: this.display_movie
        }
        
    }
    
    add_count=()=>{
        this.setState({
            count: this.state.count+=1
        })
    }

    display_movie=(movie_details)=>{


        this.setState({
            movie_list: [...this.state.movie_list,movie_details]
        })

        console.log(this.state.movie_list)

        // let display_list = this.state.movie_list.map((item,index)=>{
        //     return <div>
        //         <h2>{item.movie_name}</h2>
        //         <p>{item.gross_value}</p>
        //     </div>
        // })
    }


   

    render(){
        return <Moviesprovider.Provider value={{...this.state}}>
                {this.props.children}
               </Moviesprovider.Provider>
        
    }
}
export default MoviesContext
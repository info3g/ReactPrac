import React, { useContext } from 'react'
import {Moviesprovider} from '../MoviesContext'

function MovieDisplay(){

    const dataObj = useContext(Moviesprovider)

    const all_movies = dataObj.movie_list.map((item,idx)=>{
        return <div> 
        <h1>{item.movie_name}</h1>
        <p>{item.gross_value}</p>
    </div>
    })
    return <div>
        {all_movies}
    </div>
}
export default MovieDisplay
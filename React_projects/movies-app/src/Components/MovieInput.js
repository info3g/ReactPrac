import React, { useContext, useState } from 'react'
import {Moviesprovider} from '../MoviesContext'

function MovieInput(){

    const dataObj = useContext(Moviesprovider)

    const[movie_name,setMovie_name] = useState('')
    const[gross_value,setGross_value] = useState(0)
    
    function adding_movie(){
        let  movie_details= {
            movie_name: movie_name,
            gross_value: gross_value
        }
        dataObj.add_count()

        dataObj.display_movie(movie_details)
    }


    return <div>
        <h1>Add Movie</h1>
        <input type="text" placeholder='Movie name' value={movie_name} onChange={(e)=>{setMovie_name(e.target.value)}}/>
        <input type="text" placeholder='Gross value' value={gross_value} onChange={(e)=>{setGross_value(e.target.value)}}/>
        <button onClick={adding_movie}>Add movie</button>
    </div>
}
export default MovieInput
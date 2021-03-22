import React, { useContext } from 'react'
import {Moviesprovider} from '../MoviesContext'


function MovieCounter(){

    const dataObj = useContext(Moviesprovider)

    return <div>
       
        <h1>Total Movies Count: {dataObj.count}</h1>
    </div>

}
export default MovieCounter
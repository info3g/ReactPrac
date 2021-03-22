import React from 'react'
import MovieCounter from '../Components/MovieCounter'
import MovieDisplay from '../Components/MovieDisplay'
import MovieInput from '../Components/MovieInput'

function Home(){
    return <div>
        <MovieCounter/>
        <MovieInput/>
        <MovieDisplay/>
    </div>    
}
export default Home
import React from 'react'

 function Fetch() {
    
    async function getData(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log(await res.json())
    }

    return <div>
        <button onClick={getData}>Get data(Fetch) from API</button>
    </div>
}
export default Fetch

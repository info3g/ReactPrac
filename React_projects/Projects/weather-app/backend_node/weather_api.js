const express  = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(cors())
// all in all this is  apost api but a get call is made inside it
app.post('/climate',function (req,res) {
        console.log(req)
        const country = req.body.countryName
        console.log(`here is ${country}`)
        //this is a get api call from another api
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=c4a2278c07f801b5347271d8875c9920`
       
        axios(url)
        .then((response)=>{
            // console.log(response.data)
            const data = response.data 
            res.send(data) // sending data back to front end
        }).catch((error)=>{console.log(error)})
        
})
app.listen(5000,'127.0.0.1',function() {
    console.log('listening on port 5000')
})
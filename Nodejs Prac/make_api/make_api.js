const axios = require('axios');
const cors  = require('cors')
const express = require('express')
const app = express()

// import body-parser
const bodyParser = require('body-parser')

// encode the parser 
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())//so that data is sent in json
app.use(cors()) // cors is cross-origin resource sharing, if this is not used we will not get data at frontend(react)
// cors is used to access restricted data which is server on one domain(node) and another domain has requested it(react)
//create router instance and make a get request

const router = express.Router()

// router.get('/',function (req,res) {
//     const config = {
//                 method: 'get',
//                 url: 'http://api.openweathermap.org/data/2.5/forecast?q=india&appid=c4a2278c07f801b5347271d8875c9920',
//                 headers: { }
//               };
              
//               axios(config)
//               .then(function (response) {
//                   const a  = response.data
//                   res.json(a)
//               })
//               .catch(function (error) {
//                 console.log(error);
//               });
// })

/////////////post api//////////////////////////////

// router.route('/country')

// .post(function (req,res) {
//     const country = req.body.country
//     console.log(country)
// })

///////////////////////////////////////////////////

router.route('/weather')

.post(function (req,res) {
    const country = req.body.country
    console.log(country)

    const config = {
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=c4a2278c07f801b5347271d8875c9920`,
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
        const data  = response.data
        // console.log(data)
        res.json(data)
    })
    .catch(function (error) {
      console.log(error);
    });


})




///////////////////////////////////////////////////
//register the route, now every route starts with /api
//full url will be http://localhost:5000/api/
//if insead of /api, we write /abc then final url will be http://localhost:5000/abc/
//if one of our get endpoint is '/posts' then final url will be http://localhost:5000/api/posts  
app.use('/api',router)

app.listen(5000,'127.0.0.1')



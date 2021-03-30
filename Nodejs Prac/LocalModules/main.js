 const http = require('http')
 const dbDetails = require('./dbInfo')

 http.createServer(function(req,res){

    if(req.url === '/'){
        // res.end('this is home page')
        res.end(`username is ${dbDetails.username}`)
    }

    else if (req.url === '/games'){
        res.end('this is games page')
    }

 }).listen(5000)
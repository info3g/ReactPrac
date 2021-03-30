const http = require('http')

http.createServer(function(req,res){
    if(req.url === '/'){
        res.end('this is home')
    }

    else if(req.url === '/users'){
        res.end('this is users page')
    }

    else if(req.url === '/games'){
        res.end('this is games')
    }
}).listen(5000)
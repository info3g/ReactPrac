const http = require('http')

http.createServer(function(req,res){
    res.end('hello NOde')
}).listen(5000)
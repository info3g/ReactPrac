const http  = require('http')
const dbInfo = require('../LocalModules/dbInfo')
http.createServer(function(req,res){
    res.end(`POrt is ${dbInfo.port}`)
}).listen(5000)
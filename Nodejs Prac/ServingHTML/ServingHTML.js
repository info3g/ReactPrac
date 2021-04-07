const http = require('http')
const fs = require('fs')

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'})
    const readStream = fs.createReadStream('index.html')
    readStream.pipe(res)// pipe to response(res) to send data to browser
}).listen(5000)
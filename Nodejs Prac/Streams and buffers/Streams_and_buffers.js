
//write streams to browser
const http = require('http')
const fs = require('fs')


http.createServer(function(req,res) {
    const readStream = fs.createReadStream('sample-text-file.txt','utf8')
    res.writeHead(200,{'Content-Type':'text/plain'})
    readStream.pipe(res)// writing data chunk to response
}).listen(5000,'127.0.0.1')




// using pipe to read and write streams
////////////////////////////////////////////////////////////////////////////////
// const http = require('http')
// const fs = require('fs')


// const readStream = fs.createReadStream('sample-text-file.txt','utf8')
// const writeStream = fs.createWriteStream('output.txt')

// readStream.pipe(writeStream)
///////////////////////////////////////////////////////////////////////////////


//read and write stream with event listner
/////////////////////////////////////////////////////////////////////////////////
// const http = require('http')
// const fs = require('fs')

// const readStream = fs.createReadStream('sample-text-file.txt','utf8')
// const writeStream = fs.createWriteStream('outputStream.txt')



// readStream.on('data',function (chunk) {
//     // console.log('new chunk')
//     // console.log(chunk)
//     writeStream.write(chunk)
// })



// http.createServer(function (req,res) {
//     res.end('aaaaa')
// }).listen(5000,'127.0.0.1')
//////////////////////////////////////////////////////////////
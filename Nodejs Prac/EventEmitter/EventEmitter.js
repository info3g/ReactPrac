var events = require('events')

var myEmitter = new events.EventEmitter() // new becoz EventEmitter is a constructor

//event listener
myEmitter.on('speak',function (msg) {
    console.log(msg)
})

//event emitter
myEmitter.emit('speak','hello')
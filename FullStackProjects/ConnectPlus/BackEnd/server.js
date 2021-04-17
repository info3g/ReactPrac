const express = require('express')
const mongoose = require('mongoose')
const fs = require('fs')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')


app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/whatsapp',{useNewUrlParser: true, useUnifiedTopology: true},function (err) {
    if(err){
        console.log(err)
    }
    else{
        console.log('DB connected')
    }
})


const NamesModel = mongoose.model('whatsappNames',{name:String})

//insert names from file
// fs.readFile('names.json','utf-8',function (err,data) {
//     if(err){
//         console.log(err)
//     }

//     else{
//         console.log(typeof data)
//         data = JSON.parse(data)
        
//         data.forEach(function(name,idx){
            
//             const names = new NamesModel({name:name})
//             names.save(function (err) {
//                 if(err){
//                     console.log(err)
//                 }
//                 else{
//                     console.log(`records inserted = ${idx}`)
//                 }
//             })    
//         })
        
//     }
// })


app.post('/getnames',function (req,res) {
    const name = req.body.name
    if(name.length===0){
        NamesModel.find({},function (err,documents) {
            if(err){
                console.log(err)
            }
            else{
                res.send(documents)
            }
        })    
    }
    else{
        NamesModel.find({name: {$regex:name, $options: "i"}},function (err,documents) {
            if(err){
                console.log(err)
            }
            else{
                res.send(documents)
            }
        })
    }
    
    
})
port=5000
app.listen(port,'127.0.0.1',function (err) {
    if(err){
        console.log(err)
    }
    else{
        console.log(`started at ${port}`)
    }
})
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
const UsersModel = mongoose.model('registeredusers',{'name':String,'email':String,'password':String})

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

//register new users from sign up page
app.post('/registerUsers',function (req,res) {
    const name = req.body.username
    const email = req.body.email
    const password = req.body.password

    const newUser = new UsersModel({'name':name,'email':email,'password':password})

    newUser.save(function (err) {
        if(err){
            res.send(err)
        }
        else{
            res.send('Record added')
        }
    })
})

//authenticate users while logging in
app.post('/authenticateUsers',function(req,res){
    
    const email = req.body.email
    const password = req.body.password
    
    let search_parameters ={}

    

    search_parameters={'email':email,'password':password}
        console.log('email was passed')

    UsersModel.find(search_parameters,function(err,documents){
        if(err){
            res.send('Records not found')
        }
        else{
            console.log('sending docs')
            res.send(documents)
            
        }
    })
})

// this api won't let new users to keep existing username/email
app.post('/checkExistingCredentials',function(req,res){
    UsersModel.find({},{name:1,email:1},function(err,documents){
        if(err){
            res.send('Error Occured')
        }
        else{
            res.send(documents)
        }
    })
})

//get all names from whatsappnames collection
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
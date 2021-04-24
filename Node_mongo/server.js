const express  = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//create database sports
mongoose.connect("mongodb://localhost:27017/sports",{useNewUrlParser:true, useUnifiedTopology:true},function (err) {
    if(err){
        console.log(err)
    }
    else{
        console.log('connection successful')
    }
})

//create name and structure for collections

const GameModel = mongoose.model('games',{gamename:String,playername:String,age:Number})


// make 4 rotes for CRUD operations

//fetch data
app.post('/getgames',function (req,res) {
    //leave the 1st parameter empty {} if you want all records else place condtions like this
    GameModel.find({gamename:"Football"},function (err,documents) {
        if(err){
            console.log(err)
        }
        else{
            res.send(documents)
        }
    })
    
})
//insert data
app.post('/addgames',function (req,res) {
    const gamename = req.body.gamename
    const player = req.body.player
    const age = req.body.age

    //create instance of new record to be added
    const newgame = new GameModel({gamename:gamename,playername:player,age:age})

    //save the instance with callback error function
    newgame.save(function (err) {
        if(err){
            console.log(err)
        }
        else{
           res.send('record added')
        }
    })


})
//update data
app.post('/updategames',function (req,res) {
    const gamename = req.body.gamename
    GameModel.findOneAndUpdate({gamename:gamename},{age:55},function (err) {
        if(err){
            console.log(err)
        }
        else{
            res.send('Record Updated')
        }
    })
    
})
//delete data
app.post('/deletegames',function (req,res) {
    const age = req.body.age
    GameModel.findOneAndDelete({age:age},function (err) {
        if(err){
            console.log(err)
        }
        else{
            res.send('record deleted')
        }
    })
})


port = 5000
app.listen(port,function () {
    console.log(`staretd at ${port}`)
})
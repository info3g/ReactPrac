////////////////////////////////////////////////////////////////////
const express = require('express')
const app = express()

app.set('view engine','ejs')

app.get('/profile/:name',function (req,res){
    data = {name: req.params.name,age:19,hobbies:['a','b','c','d','e']}
    res.render('profile',{person:req.params.name, data:data})
})

app.listen(5000)



////////////////////////////////////////////////////////////////////
// const express = require('express')
// const app = express()

// //got to this link like http://localhost:5000/profile/asddas
// app.get('/profile/:name',function(req,res) {
//     res.send('this is name '+ req.params.name)
// })
// app.listen(5000)

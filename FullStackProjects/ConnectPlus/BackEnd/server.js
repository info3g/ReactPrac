const express = require('express')
const mongoose = require('mongoose')
const fs = require('fs')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
3

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
const UserContacts = mongoose.model('UserContacts',{'UserEmail':String,'UserContactDetails':Object})
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

//This api gets all users from registerUsers collection
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

//get all contact names of logged in user only from registered users collections
app.post('/registered-users-data',function(req,res){
    //in find to search email should go
    UsersModel.find({},{email:1},function(err,documents){
        if(err){
            res.send(err)
        }
        else{
            res.send(documents)
        }
    })
})

// this api saves users with thier contacts(initailly) after that updates the contacts for that user
app.post('/save-usercontacts',function(req,res){
    const userEmail = req.body.userEmail
    const userContactEmail = req.body.UserContactDetails.userContactEmail
    const userContactName = req.body.UserContactDetails.userContactName
    // console.log(userContactEmail)
    // if userEmail is same as userContactEmail then do not save, nikhil@gmail.com cannot save himself as contact
    if(userEmail === userContactEmail){
        res.send('userContactEmail cannot be same as userEmail')
    }
    else{
        UserContacts.find({'UserEmail':userEmail},function(err,documents){
            if(err){
                console.log(err)
            }
            else{
                //add that contact
                if(documents.length === 0){
                    UserContactDetails = {'UserContactEmail':[userContactEmail],'userContactName':[userContactName]}
                    const saveUser = new UserContacts({'UserEmail':userEmail,'UserContactDetails':UserContactDetails})            
                    saveUser.save(function(err){
                        if(err){
                            console.log(err)
                        }
                        else{
                            res.send('The record is saved')
                        }
                    })
                }
                //update that contact
                else{
                    // console.log(documents[0])
                    // console.log(documents[0].UserContactDetails.UserContactEmail)

                    
                    const UserContactEmail_arr = documents[0].UserContactDetails.UserContactEmail
                    const userContactName_arr = documents[0].UserContactDetails.userContactName
                    // console.log(UserContactEmail_arr)

                    //Check for Email only, if email exists, then skip else update 
                    if(UserContactEmail_arr.includes(userContactEmail)){
                    res.send('Contact already exists')  
                    }
                    else{

                        UserContactEmail_arr.push(userContactEmail)
                        userContactName_arr.push(userContactName)

                        // console.log(UserContactEmail_arr) 
                        // console.log(userContactName_arr) 

                        UserContacts.updateOne({'UserEmail':userEmail},
                        {$set:{'UserContactDetails.UserContactEmail':UserContactEmail_arr,'UserContactDetails.userContactName':userContactName_arr}},function(err){
                            if(err){
                                console.log(err)
                            }
                            else{
                                // console.log(documents[0].UserContactDetails.UserContactEmail)
                                res.send('Record Updated')
                            }
                        })
                    }
                    
                    

                }
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
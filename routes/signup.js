const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')


router.get('/signup',(req,res)=>{
    res.send('This is signup page')
})

router.post('/signup',(req,res)=>{
    console.log(req.body)
    const {name,email,password,profilePic,city} = req.body
    if(!email || !password || !name){
        return res.status(422).json({error:"Please fill up all the required fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exists with this email."})
        }
        bcrypt.hash(password,12)
        .then(hashedPass=>{
            const user = new User({
                email:email,
                name:name,
                password:hashedPass,
                city,
                profilePic
            })
            user.save()
            .then(user=>{
                res.json({message:"saved successfully"})
            })
            .catch(err=>{
                console.log("error in saving:",err)
            })
        })
        .catch(err=>{
            console.log("eoor in hashing:",err)
        })
    })
    .catch(err=>{
        console.log("error in finding user:",err)
    })
})


module.exports = router
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')


router.get('/login',(req,res)=>{
    res.send('This is login page')
})

router.post('/login',(req,res)=>{
    //console.log(req.body)
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).json({error:"Please give email and password."})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid email or password."})
        }
        //console.log(savedUser)
        bcrypt.compare(password,savedUser.password)
        .then((doMatch)=>{
            if(doMatch){
                res.json({message:"successfully signed in."})
            }
            else{
                return res.status(422).json({error:"Invalid email or password."})
            }
        })
        .catch(err=>{
            console.log("error in login:",err)
        })
    })
})


module.exports = router
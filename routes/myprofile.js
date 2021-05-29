const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const requiredlogin = require("../auths/requiredLogin")


router.get('/myprofile',requiredlogin,(req,res)=>{
    //res.send('This is myprofile page')
    res.json(req.user)  // user data send to fill up the required places
})

router.put('/myprofile',requiredlogin,(req,res)=>{
    //console.log(req.user)
    const {name,profilePic,city,age,about,profession} = req.body
    //console.log(req.body)
    User.findByIdAndUpdate(req.user._id,
        {
            name,
            profilePic,
            about,
            profession,
            city,
            age
        },
        {
            new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        else{
            console.log(result)
            res.json(result)
        }
    })
})


module.exports = router
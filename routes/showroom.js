const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const Room = mongoose.model("Room")
const validator = require('validator')
const requiredlogin = require("../auths/requiredLogin")

router.get("/allroom",(req,res) => {
    Room.find()
        .then(rooms => {
            
                console.log(rooms)
                res.json({rooms})
            
        })
        .catch(err => {
            console.log(err);
        })
})

router.get("/myroom",requiredlogin,(req,res) => {
    //console.log(req)
    Room.find({ owner: req.user})
        .then(rooms => {
            //console.log(rooms)
            res.json({rooms})      
        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router
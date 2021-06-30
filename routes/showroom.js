const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const Room = mongoose.model("Room")
const validator = require('validator')
const requiredlogin = require("../auths/requiredLogin")

router.get("/allroom",(req,res) => {
    Room.find({},
        ['_id','rent','city','state','type','mainPic','gender'],
        {
            sort:{
                createDate: -1 //Sort by Date Added DESC
            }
        })
        .then(rooms => {
            
                console.log(rooms)
                res.json({rooms})
            
        })
        .catch(err => {
            console.log(err);
            res.status(422).send()
        })
})

router.get("/room/:roomid",requiredlogin,(req,res) => {
    console.log(req.params.roomid)
    Room.findOne({_id:req.params.roomid})
        .then(room => {
            console.log(room)
            res.json({room})
        })
        .catch(err => {
            console.log(err);
            res.status(422).send()
        })
})

router.get("/myroom",requiredlogin,(req,res) => {
    //console.log(req)
    Room.find(
        { owner: req.user},
        ['_id','rent','city','state','type','mainPic','gender'],
        {
            sort:{
                createDate: -1 //Sort by Date Added DESC
            }
        })
        .then(rooms => {
            //console.log(rooms)
            res.json({rooms})      
        })
        .catch(err => {
            console.log(err);
            res.status(422).send()
        })
})

router.get("/city/:cityname",(req,res) => {
    console.log("param is:" ,req.params.cityname)
    // Find First 10 News Items
    Room.find({
        city: req.params.cityname//req.params.city // Search Filters
    },
    ['_id','rent','city','state','type','mainPic','gender'], // Columns to Return, default all columns
    {
        skip:0, // Starting Row
        limit:20, // Ending Row ,only first 20 rooms will be sent
        sort:{
            createDate: -1 //Sort by Date Added DESC
        }
    })
    .then(rooms => {
        console.log(rooms)
        res.json({rooms})      
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router
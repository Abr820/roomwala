const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const Room = mongoose.model("Room")
const validator = require('validator')
const requiredlogin = require("../auths/requiredLogin")

router.get("/allcount",(req,res) => {
    Room.countDocuments({})
        .then(count => {
            res.json(Math.ceil(count/6))
        })
        .catch(err => {
            console.log(err);
            res.status(422).send()
        })
})

router.get("/allroom/:page",(req,res) => {
    Room.find({},
        ['_id','rent','city','state','type','mainPic','gender'],
        {   
            skip:(req.params.page)*6,
            limit:6,
            sort:{
                rent: 1 //Sort by rent Added DESC
            }
        })
        .then(rooms => {
            res.json({rooms})  
        })
        .catch(err => {
            console.log(err);
            res.status(422).send()
        })
})

router.get("/room/:roomid",requiredlogin,(req,res) => {
    Room.findOne({_id:req.params.roomid})
        .then(room => {
            res.json({room})
        })
        .catch(err => {
            console.log(err);
            res.status(422).send()
        })
})

router.get("/myroom",requiredlogin,(req,res) => {
    Room.find(
        { owner: req.user},
        ['_id','rent','city','state','type','mainPic','gender'],
        {
            sort:{
                createDate: -1 //Sort by Date Added DESC
            }
        })
        .then(rooms => {
            res.json({rooms})      
        })
        .catch(err => {
            console.log(err)
            res.status(422).send()
        })
})

router.get("/citycount/:cityname",(req,res) => {
    Room.countDocuments({city:req.params.cityname})
        .then(count => {
            res.json(Math.ceil(count/6))
        })
        .catch(err => {
            console.log(err)
            res.status(422).send()
        })
})

router.get("/city/:cityname/:page",(req,res) => {
    Room.find({
        city: req.params.cityname//req.params.city // Search Filters
    },
    ['_id','rent','city','state','type','mainPic','gender'], // Columns to Return, default all columns
    {
        skip:(req.params.page)*6, // Starting Row
        limit:6, // Ending Row ,only first 20 rooms will be sent
        sort:{
            rent: 1 //Sort by rent Added DESC
        }
    })
    .then(rooms => {
        res.json({rooms})      
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router
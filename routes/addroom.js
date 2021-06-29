const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const Room = mongoose.model("Room")
const validator = require('validator')
const requiredlogin = require("../auths/requiredLogin")

router.post('/addroom',requiredlogin,(req,res)=>{
    console.log(req.body,"signup auth executed")
    const { type,
            imageUrl,
            contactPhone,
            address,
            city,
            state,
            country,
            gender,
            maritalStatus,
            zip,
            utilitiesInc,
            rent,
            description} = req.body
    // if(type==="" || address==="" || city==="" || zip==="" || rent===""){
    //     return res.status(422).json({error:"Please fill up all the required fields."})
    // }
    // if(imageUrl===""){
    //     return res.status(422).json({error:"Please add an Image of your room."})
    // }
    var contact
    if(contactPhone!==""){
        if(!validator.isNumeric(contactPhone)){
            return res.status(422).json({error:"Kindly use a valid phone number."})
        }
        contact=contactPhone
    }
    else{
        contact = req.user.phone
    }

    var boolUtilitiesInc = (utilitiesInc == 'true') || (utilitiesInc == 'True') || (utilitiesInc == 'TRUE')
    var  intRent = parseInt(rent, 10);
    
    // if(!validator.isNumeric(zip)){
    //     return res.status(422).json({error:"Kindly use a valid zip code."})
    // }

    const room = new Room({
        type,
        mainPic:imageUrl,
        contactPhone:contact,
        address,
        city,
        state,
        country,
        gender,
        maritalStatus,
        zip,
        utilitiesInc:boolUtilitiesInc,
        rent:intRent,
        description,
        owner:req.user
    })
    room.save()
    .then(room=>{
        console.log(room)
        res.json({message:"saved successfully"})
    })
    .catch(err=>{
        console.log("error in saving:",err)
        return res.status(422).json({error:"Server Problem. Try again"})
    })
    
})

module.exports = router
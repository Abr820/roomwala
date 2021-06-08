const mongoose = require('mongoose')
const User = mongoose.model("User")
const validator = require('validator')


const signup = (req,res,next)=>{
    //console.log(req.body,"signup auth executed")
    const { type,
            mainPic,
            contactPhone,
            address,
            city,
            state,
            country,
            zip,
            utilitiesInc,
            rent,
            description} = req.body
    if(!type || !address || !city || !zip || !rent){
        return res.status(422).json({error:"Please fill up all the required fields"})
    }
    if(contactPhone){
        if(!validator.isNumeric(cotactPhone)){
            return res.status(422).json({error:"Kindly use a valid phone number."})
        }
    }
    else{
        contactPhone = req.user.phone
    }
    if(!country){
        country = 'India'
    }
    if(!validator.isNumeric(zip) || this.length(zip) != 6){
        return res.status(422).json({error:"Kindly use a valid zip code."})
    }

    User.findOne({$or:[{email:email},{phone:phone}]})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exists with this email or phone number."})
        }
        next()
    })
    .catch(err=>{
        console.log("error in finding user:",err)
    })
    
  }

  module.exports = signup
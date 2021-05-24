const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')


const login = (req,res,next)=>{
    //console.log(req.body,"login auth executed")
    const {user_id,password} = req.body
    if(!user_id || !password){
        return res.status(422).json({error:"Please give user id and password."})
    }
    User.findOne({$or:[{email:user_id},{phone:user_id}]}).select('password')
    .then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid user id or password."})
        }
        //console.log(savedUser)
        bcrypt.compare(password,savedUser.password)
        .then((doMatch)=>{
            if(doMatch){
                res.json({message:"successfully signed in."})
            }
            else{
                return res.status(422).json({error:"Invalid user id or password."})
            }
        })
        .catch(err=>{
            console.log("error in login:",err)
        })
    })
    next()
  }

  module.exports = login
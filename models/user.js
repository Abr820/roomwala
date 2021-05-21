const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please enter you name.'],
        trim:true
    },
    email:{
        type:String,
        required:[true, 'Please enter your email id.'],
        unique:[true,'A account with this email id already exist'],
        validate:[validator.isEmail,'Please provide a valid email id']
    },
    phone:{
        type:String,
        required:[true,'Please provide your phone number'],
        validate:validator.isNumeric,
        trim:true
    },
    password:{
        type:String,
        required:[true,'Please provide a password'],
        //select:false
    },
    city:{
        type:String,
        default:''
    },
    profilePic:{
        type:String,
        default:'path to default profile pic'
    }
})

mongoose.model("User",userSchema)